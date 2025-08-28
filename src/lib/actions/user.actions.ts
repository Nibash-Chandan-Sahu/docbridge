"use server"; // This directive marks all functions in this file as Server Actions

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma"; // Import our singleton prisma client

export const syncUser = async () => {
  // Get the current user from Clerk
  const clerkUser = await currentUser();

  if (!clerkUser) {
    // This should not happen if the user is logged in, but it's a good safeguard
    throw new Error("User not found");
  }

  // Check if the user already exists in our database
  const user = await prisma.user.findUnique({
    where: {
      clerkId: clerkUser.id,
    },
  });

  // If the user already exists, we're done.
  if (user) {
    return user;
  }

  // If the user does not exist, create a new user record
  const newUser = await prisma.user.create({
    data: {
      clerkId: clerkUser.id,
      email: clerkUser.emailAddresses[0].emailAddress,
      name: clerkUser.firstName ? `${clerkUser.firstName} ${clerkUser.lastName || ''}`.trim() : 'User',
      imageUrl: clerkUser.imageUrl,
    },
  });

  return newUser;
};
