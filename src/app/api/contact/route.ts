//src/app/api/contact/route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

// สร้าง Prisma instance แยก สำหรับ Vercel
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log('Received data:', { name, email, subject, message });

    // Validation
    if (!name || !email || !subject || !message) {
      console.log('Validation failed: Missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Attempting to save to database...');

    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
      },
    });

    console.log('Message saved successfully:', contactMessage.id);

    // ✅ เพิ่ม redirect หลังจากบันทึกสำเร็จ
    return NextResponse.json(
      { 
        message: 'Message sent successfully!', 
        id: contactMessage.id,
        redirect: '/admin/messages' // เพิ่มข้อมูล redirect
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving contact message:', error);
    
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}