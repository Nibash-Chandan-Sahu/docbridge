"use client";

import { syncUser } from "@/lib/actions/user.actions";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const UserSync = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    // Only run the sync if the user is signed in and the user object is available
    if (isSignedIn && user) {
      syncUser().catch(console.error);
    }
  }, [isSignedIn, user]); // Dependency array ensures this runs only when auth state changes

  return <>{children}</>;
};

export default UserSync;
