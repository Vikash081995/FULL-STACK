import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePreferences = request.cookies.get("theme");

  if (!themePreferences) {
    response.cookies.set("theme", "light");
  }

  response.headers.set("custom-header", "hello");
  //   return NextResponse.redirect(new URL("/", request.url));

  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  }
}

export const config = {
  matcher: "/profile",
};
