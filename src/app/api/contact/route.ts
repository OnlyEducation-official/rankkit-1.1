/* eslint-disable import/no-extraneous-dependencies */
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Create a Resend instance with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// The POST function to handle the incoming POST request
// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  try {
    // Extract form data from the request body
    const { name, email, phone, orgname, services, hearAboutUs, message } = await req.json();

    // Construct the email content dynamically
    const emailContent = `
      You have a new message from:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Organization: ${orgname || 'N/A'}
      Services: ${services?.join(', ') || 'N/A'}
      How they heard about you: ${hearAboutUs?.join(', ') || 'N/A'}
      
      Message:
      ${message}
    `;

    // Send email to user
    await resend.emails.send({
      from: 'connect@rankkit.in', // your sender email
      to: email, // recipient email
      subject: 'New Contact Form Submission',
      text: emailContent,
    });

    // Send email to rankkit
    await resend.emails.send({
      from: 'connect@rankkit.in', // your sender email
      to: 'leads.rankkit@gmail.com', // recipient email
      subject: 'New Contact Form Submission',
      text: emailContent,
    });

    // Return a successful response
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    // Return an error response if something went wrong
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
