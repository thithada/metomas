// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // ตรวจสอบเฉพาะ admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // อนุญาตให้เข้าหน้า login
    if (request.nextUrl.pathname === '/admin') {
      return NextResponse.next();
    }
    
    // สำหรับ routes อื่นๆ ใน /admin ให้ตรวจสอบ auth header หรือ cookie
    // ในตัวอย่างนี้จะให้ผ่านไปก่อน เพราะใช้ client-side auth
    // ในการใช้งานจริงควรใช้ server-side authentication
    
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
}