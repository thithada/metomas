// src/app/api/admin/messages/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// สร้าง Prisma instance แยก สำหรับ Vercel - ใช้ pattern เดียวกับ contact API
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// GET - ดึงข้อความทั้งหมด
export async function GET(request: NextRequest) {
  try {
    console.log('Fetching all contact messages...');
    
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log(`Found ${messages.length} messages`);
    
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch messages',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// สำหรับความปลอดภัย - Basic auth check (แนะนำให้ปรับปรุงในการใช้งานจริง)
function checkAuth(request: NextRequest) {
  // สำหรับตอนนี้ให้ผ่านไปก่อน
  // ในการใช้งานจริงควรใช้ NextAuth.js หรือ JWT
  return true;
}