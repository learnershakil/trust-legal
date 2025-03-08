import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch all messages
export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

// POST - Create a new message
export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();
    
    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Name, email, company, and message are required' }, 
        { status: 400 }
      );
    }
    
    // Create new message
    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        company,
        message,
        // Other fields have defaults in the schema:
        // star: false,
        // date: now(),
        // createdAt: now(),
        // updatedAt: now()
      }
    });
    
    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create message' }, { status: 500 });
  }
}

// DELETE - Remove a message by ID
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
    }
    
    await prisma.message.delete({
      where: { id }
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message deleted successfully' 
    });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}