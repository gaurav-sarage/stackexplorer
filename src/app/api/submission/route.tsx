import { NextRequest, NextResponse } from "next/server";

import { SubmissionEmail } from "@/components/submission-email";
import { smtpEmail, transporter } from "@/lib/nodemailer";
import { render } from "@react-email/components";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { category, url } = body;

    const emailHtml = render(<SubmissionEmail category={category} url={url} />);

    const options = {
        from: smtpEmail,
        to: smtpEmail,
        subject: "You got a new submission on StackExplorer!",
        html: emailHtml,
    };

    try {
        await transporter.sendMail(options);
    } catch (error) {
        console.error("Failed to send email: ", error);
    }
    return new Response("OK");
};