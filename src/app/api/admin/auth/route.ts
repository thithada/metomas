// src/app/api/admin/auth/route.ts
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    console.log('Admin login attempt for username:', username);

    // ตรวจสอบ credentials (ในการใช้งานจริงควรเข้ารหัสรหัสผ่าน)
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      console.log('Invalid credentials for:', username);
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // สร้าง simple session token (ในการใช้งานจริงควรใช้ JWT)
    const sessionToken = crypto.randomBytes(32).toString('hex');
    
    console.log('Login successful for:', username);

    // สร้าง response พร้อม cookie
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      token: sessionToken
    });

    // ตั้งค่า cookie (HttpOnly สำหรับความปลอดภัย)
    response.cookies.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/'
    });

    return response;

  } catch (error) {
    console.error('Error in admin login:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}

// Logout endpoint
export async function DELETE(request: NextRequest) {
  try {
    const response = NextResponse.json({
      success: true,
      message: 'Logout successful'
    });

    // ลบ cookie
    response.cookies.delete('admin_session');

    return response;
  } catch (error) {
    console.error('Error in admin logout:', error);
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}