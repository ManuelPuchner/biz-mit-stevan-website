// middleware.ts
import { auth } from "@/auth"; // your auth.ts setup
import { NextResponse } from "next/server";

export default auth((req) => {
  // if not logged in, redirect to sign-in
  if (!req.auth && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  return NextResponse.next();
});

// Match all routes except static files, api/auth routes, etc.
export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|static/|assets/).*)"],
};