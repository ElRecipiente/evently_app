import { PrismaClient } from '@prisma/client';
import {NextRequest, NextResponse} from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, {params }: { params: { limit: number } }) {

  const limit = parseInt(String(params.limit), 10);

  try {
    const event = await prisma.event.findMany({
      take: limit,
    });
    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json(event);
  } catch (error) {
    console.error("Error details : ", error)
    return NextResponse.json({error: "Internal Server Error"}, {status: 500})
  }
}