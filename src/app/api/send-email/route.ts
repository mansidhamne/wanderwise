import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
        // user: 'mansid0903@gmail.com',
        // pass: 'txrn tzsw tlsv qsjg',
      },
    });

    // Set up email data
    let mailOptions = {
      from: `${email}`,
      to: 'mansid0903@gmail.com',
      subject: 'WanderWise Interested User',
      text: `${email} has signed up for WanderWise!`,
    };

    // Send the email
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
  }
