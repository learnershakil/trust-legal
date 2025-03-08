import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch all todos
export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch todos' }, { status: 500 });
  }
}

// POST - Create a new todo
export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();
    
    if (!text) {
      return NextResponse.json({ error: 'Todo text is required' }, { status: 400 });
    }
    
    const todo = await prisma.todo.create({
      data: {
        text,
        // done will default to false per the schema
      }
    });
    
    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create todo' }, { status: 500 });
  }
}

// PUT - Update a todo's done status
export async function PUT(request: NextRequest) {
  try {
    const { id, done } = await request.json();
    
    if (!id || typeof done !== 'boolean') {
      return NextResponse.json({ error: 'ID and done status are required' }, { status: 400 });
    }
    
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { done }
    });
    
    return NextResponse.json(updatedTodo);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to update todo' }, { status: 500 });
  }
}

// DELETE - Remove a todo
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json({ error: 'Todo ID is required' }, { status: 400 });
    }
    
    await prisma.todo.delete({
      where: { id }
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Todo deleted successfully' 
    });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to delete todo' }, { status: 500 });
  }
}