import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define which routes are protected
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)', // Protects all routes starting with /dashboard
  // Add any other routes you want to protect here
]);

export default clerkMiddleware((auth, req) => {
  // Check if the route is a protected route
  if (isProtectedRoute(req)) {
    auth().protect(); // If it is, protect it
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
