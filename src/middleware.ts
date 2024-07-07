import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const accessToken = request.cookies.get('accessToken')?.value
    if (!accessToken) {
        return NextResponse.redirect(new URL('/sign-in', request.url))
    }
    if (accessToken) {
        return NextResponse.next();
    }

}

export const config = {
    matcher: ['/participate/:path*', '/dashboard/:path*'],
}