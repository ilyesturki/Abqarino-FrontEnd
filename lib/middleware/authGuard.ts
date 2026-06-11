import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function authGuard(
  req: NextRequest
): Promise<NextResponse | void> {
  const url = req.nextUrl;
  const pathname = url.pathname;

  const normalizedPathname = pathname.replace(/^\/(fr|en)\//, "/");

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // const role = typeof token?.role === "string" ? token.role : undefined;

  return;
}

function redirectUnauthorized(req: NextRequest): NextResponse {
  return NextResponse.redirect(new URL("/unauthorized", req.url));
}
