import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
const { pathname } = request.nextUrl;
  
  // Allow access to /courses list page
  if (pathname === '/courses') {
    return NextResponse.next();
  }



 // Protect individual course pages
const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

//  this things return me to home so the solution is 
  // if(!session){

//   return NextResponse.redirect(new URL('/login', request.url))
// }
// solution
if (!session) {
  const loginUrl = new URL("/login", request.url);

  // save where user wanted to go
  loginUrl.searchParams.set("callbackUrl", request.url);

  return NextResponse.redirect(loginUrl);
}

}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/courses/:path*'],
};