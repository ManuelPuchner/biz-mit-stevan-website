// middleware.ts
import { auth } from "@/auth"; // your auth.ts setup
import { NextResponse } from "next/server";

export default auth((req) => {
  const protectedPaths: string[] = [];
  if (!req.auth && protectedPaths.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  return NextResponse.next();
});

// Match all routes except static files, api/auth routes, etc.
export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|static/|assets/).*)"],
};