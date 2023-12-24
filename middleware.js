import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default async function middleware(req) {
     const token = await getToken({ req });
     const isAuthenticated = !!token;

     if (req.nextUrl.pathname.startsWith('/signIn') && isAuthenticated) {
          return NextResponse.redirect(new URL('/add_products', req.url));
     }

     return await withAuth(req, {
          pages: {
               signIn: '/signIn',
          },
     });
}

// specify on which routes you want to run the middleware
export const config = {
  matcher: ["/inventory","/add_products", "/signIn"],
};