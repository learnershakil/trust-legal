import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch all newsletter subscriptions
export async function GET() {
  try {
    const newsletters = await prisma.newsletter.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(newsletters);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch newsletters' }, { status: 500 });
  }
}

// POST - Add new email subscription
export async function POST(request: NextRequest) {
  try {
    const { mailId } = await request.json();
    
    if (!mailId) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    
    const newsletter = await prisma.newsletter.create({
      data: { mailId }
    });
    
    return NextResponse.json(newsletter, { status: 201 });
  } catch (error: any) {
    // Check for unique constraint violation
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'This email is already subscribed' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to add subscription' }, { status: 500 });
  }
}

// PUT - Update an email subscription
export async function PUT(request: NextRequest) {
  try {
    const { id, mailId } = await request.json();
    
    if (!id || !mailId) {
      return NextResponse.json({ error: 'Email are required' }, { status: 400 });
    }
    
    const updated = await prisma.newsletter.update({
      where: { id },
      data: { mailId }
    });
    
    return NextResponse.json(updated);
  } catch (error: any) {
    // Record not found
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Subscription not found' }, { status: 404 });
    }
    // Email already exists
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'This email is already used' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to update subscription' }, { status: 500 });
  }
}

// DELETE - Remove an email subscription
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    await prisma.newsletter.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true, message: 'Subscription removed successfully' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Subscription not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to remove subscription' }, { status: 500 });
  }
}