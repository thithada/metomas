// src/app/api/admin/auth/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('Admin login API called');
    
    const body = await request.json();
    const { username, password } = body;

    console.log('Login attempt for:', username);
    console.log('Available env vars:', {
      hasUsername: !!process.env.ADMIN_USERNAME,
      hasPassword: !!process.env.ADMIN_PASSWORD,
      nodeEnv: process.env.NODE_ENV
    });

    // ตรวจสอบ credentials
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

    console.log('Expected username:', ADMIN_USERNAME);
    console.log('Received username:', username);
    console.log('Password match:', password === ADMIN_PASSWORD);

    if (!username || !password) {
      console.log('Missing username or password');
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      console.log('Invalid credentials');
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    console.log('Login successful');
    
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token: 'admin-token-' + Date.now()
    });

  } catch (error) {
    console.error('Error in admin auth:', error);
    return NextResponse.json(
      { 
        error: 'Login failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Logout
export async function DELETE() {
  return NextResponse.json({
    success: true,
    message: 'Logout successful'
  });
}