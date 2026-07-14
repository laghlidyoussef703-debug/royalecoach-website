import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Sets x-pathname header so the root layout can conditionally hide Navbar/Footer
// on /u/[code] invite pages (which must be standalone with no site navigation).
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('x-pathname', request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
