import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import FormData from "form-data";
import Mailgun from "mailgun.js";


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
      }
    });
    
    // Send email notification
    const mailgun = new Mailgun(FormData);
    
    if (!process.env.MAILGUN_API_KEY) {
      throw new Error('MAILGUN_API_KEY environment variable is not defined');
    }
    
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    });

    try {
      const response = await mg.messages.create("sandbox3b5e4ee972f7419a9733846867b9fb99.mailgun.org", {
        from: "Mailgun Sandbox <postmaster@sandbox3b5e4ee972f7419a9733846867b9fb99.mailgun.org>",
        to: ["SHAKIL AHMAD <learnershakil@gmail.com>"],
        subject: "New Message from Contact Form",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
          .header { background-color: #f8f9fa; padding: 15px; border-bottom: 2px solid #0056b3; }
          .content { padding: 20px 0; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0056b3; }
          .footer { font-size: 12px; color: #777; border-top: 1px solid #ddd; padding-top: 15px; margin-top: 20px; }
        </style>
          </head>
          <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
          <span class="label">Name:</span> ${name}
            </div>
            <div class="field">
          <span class="label">Email:</span> ${email}
            </div>
            <div class="field">
          <span class="label">Company:</span> ${company}
            </div>
            <div class="field">
          <span class="label">Message:</span><br>
          ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div class="footer">
            This is an automated email from your website contact form.
          </div>
        </div>
          </body>
          </html>
        `,
      });
      
    } catch (error) {
      console.log(error);
    }



    
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