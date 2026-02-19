import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip password check if no password is configured
  const sitePassword = process.env.SITE_PASSWORD;
  if (!sitePassword) {
    return NextResponse.next();
  }

  // Check for access cookie
  const hasAccess = request.cookies.get("site_access")?.value === "granted";

  if (hasAccess) {
    return NextResponse.next();
  }

  // Not authenticated — redirect to /passwort
  if (pathname !== "/passwort") {
    const url = request.nextUrl.clone();
    url.pathname = "/passwort";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - /passwort (the login page itself)
     * - /api (API routes)
     * - /_next (Next.js internals)
     * - /favicon.ico, /robots.txt, /sitemap.xml
     * - Static assets (images, fonts, etc.)
     */
    "/((?!passwort|api|seelen-profil/api|_next|favicon\\.ico|robots\\.txt|sitemap\\.xml|images|cards|backgrounds|fonts|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff2?|ttf|eot|css|js|map)).*)",
  ],
};
