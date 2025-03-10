import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch all blogs
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

// POST - Create a new blog
export async function POST(request: NextRequest) {
  try {
    const { title, slug, excerpt, description, date, category, image, featured = false } = await request.json();
    
    // Validate required fields
    if (!title || !excerpt || !description || !date || !category || !image) {
      return NextResponse.json(
        { error: 'All fields are required: title, excerpt, description, date, category, image' }, 
        { status: 400 }
      );
    }
    
    // Generate slug from title if not provided
    const finalSlug = slug || title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    
    try {
      const blog = await prisma.blog.create({
        data: {
          title,
          slug: finalSlug,
          excerpt,
          description,
          date,
          category,
          image,
          featured
        }
      });
      
      return NextResponse.json(blog, { status: 201 });
    } catch (error: any) {
      // Handle slug uniqueness constraint violation
      if (error.code === 'P2002') {
        return NextResponse.json({ error: 'A blog with this slug already exists' }, { status: 409 });
      }
      throw error;
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}

// PUT - Update an existing blog
export async function PUT(request: NextRequest) {
  try {
    const { id, title, slug, excerpt, description, date, category, image, featured } = await request.json();
    
    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }
    
    // Create an update object with only the fields that are provided
    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (slug !== undefined) updateData.slug = slug;
    if (excerpt !== undefined) updateData.excerpt = excerpt;
    if (description !== undefined) updateData.description = description;
    if (date !== undefined) updateData.date = date;
    if (category !== undefined) updateData.category = category;
    if (image !== undefined) updateData.image = image;
    if (featured !== undefined) updateData.featured = featured;
    
    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(updatedBlog);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'A blog with this slug already exists' }, { status: 409 });
    }
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

// DELETE - Remove a blog
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }
    
    await prisma.blog.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}