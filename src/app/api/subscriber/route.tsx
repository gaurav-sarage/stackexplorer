import { NextRequest, NextResponse } from 'next/server';

import { NewSubscriberEmail } from '@/components/new-subscriber-email';
import { smtpEmail, transporter } from '@/lib/nodemailer';
import { render } from '@react-email/components';

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { email } = body;

  const emailHtml = render(<NewSubscriberEmail email={email} />);
 
  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: 'StackExplorer New Subscriber!',
    html: emailHtml,
  };

  try {
    // Send email using the transporter
    await transporter.sendMail(options);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
  return new Response('OK');
}
