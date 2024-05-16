import { NextRequest, NextResponse } from 'next/server';

import { FeedbackEmail } from '@/components/feedback-email';
import { smtpEmail, transporter } from '@/lib/nodemailer';
import { render } from '@react-email/components';

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { email, feedback } = body;

  const emailHtml = render(<FeedbackEmail email={email} feedback={feedback} />);

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: 'StackExplorer Feedback!',
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
