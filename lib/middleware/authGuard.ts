import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function authGuard(
  req: NextRequest
): Promise<NextResponse | void> {
  const url = req.nextUrl;
  const pathname = url.pathname;

  const normalizedPathname = pathname.replace(/^\/(fr|en)\//, "/");

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const role = typeof token?.role === "string" ? token.role : undefined;

  if (normalizedPathname.startsWith("/auth")) {
    if (token) {
      const redirectTo =
        role === "admin" ? "/dashboard/parking/door" : "/dashboard/parking";
      return NextResponse.redirect(new URL(redirectTo, req.url));
    }
    return;
  }

  if (normalizedPathname.startsWith("/moyenne")) {
    return;
  }

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (["/en", "/fr"].includes(normalizedPathname)) {
    const redirectTo =
      role === "admin" ? "/dashboard/parking/door" : "/dashboard/parking";
    return NextResponse.redirect(new URL(redirectTo, req.url));
  }

  if (normalizedPathname.startsWith("/dashboard/parking/door")) {
    if (role === "admin") return;
    return redirectUnauthorized(req);
  }

  return;
}

function redirectUnauthorized(req: NextRequest): NextResponse {
  return NextResponse.redirect(new URL("/dashboard/unauthorized", req.url));
}
