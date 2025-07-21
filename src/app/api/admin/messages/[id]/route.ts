// src/app/api/admin/messages/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// สร้าง Prisma instance แยก สำหรับ Vercel - ใช้ pattern เดียวกับ contact API
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// DELETE - ลบข้อความตาม ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    console.log('Attempting to delete message with ID:', id);

    // ตรวจสอบว่าข้อความมีอยู่จริงหรือไม่
    const existingMessage = await prisma.contactMessage.findUnique({
      where: { id }
    });

    if (!existingMessage) {
      console.log('Message not found:', id);
      return NextResponse.json(
        { error: 'Message not found' },
        { status: 404 }
      );
    }

    // ลบข้อความ
    await prisma.contactMessage.delete({
      where: { id }
    });

    console.log('Message deleted successfully:', id);

    return NextResponse.json({ 
      success: true, 
      message: 'Message deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting message:', error);
    
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to delete message',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// GET - ดึงข้อความเดียวตาม ID (ถ้าต้องการ)
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    console.log('Fetching message with ID:', id);

    const message = await prisma.contactMessage.findUnique({
      where: { id }
    });

    if (!message) {
      console.log('Message not found:', id);
      return NextResponse.json(
        { error: 'Message not found' },
        { status: 404 }
      );
    }

    console.log('Message found:', message.id);
    
    return NextResponse.json(message);
  } catch (error) {
    console.error('Error fetching message:', error);
    
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch message',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}