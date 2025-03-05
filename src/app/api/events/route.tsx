import { PrismaClient } from '@prisma/client';
import {NextResponse} from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const events = await prisma.event.findMany();
    return NextResponse.json(events);
  } catch (error) {
    console.error("Error details : ", error)
    return NextResponse.json({error: "Internal Server Error"}, {status: 500})
  }
}