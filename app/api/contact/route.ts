import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { services } from '@/lib/portfolio';
import { ContactInquiry, contactEmailHtml, contactEmailText } from '@/lib/contact-email';

export const runtime = 'nodejs';

const limits = { name: 100, email: 160, phone: 40, location: 120, service: 80, timeline: 100, message: 5000 } as const;

function readField(body: Record<string, unknown>, key: keyof typeof limits) {
  const value = body[key];
  if (typeof value !== 'string' || value.length > limits[key]) return null;
  return value.trim();
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid form submission.' }, { status: 400 });
  }

  if (typeof body.company === 'string' && body.company.trim()) return NextResponse.json({ ok: true });

  const inquiry = Object.fromEntries(Object.keys(limits).map(key => [key, readField(body, key as keyof typeof limits)])) as Record<keyof typeof limits, string | null>;
  if (!inquiry.name || !inquiry.email || !inquiry.service || !inquiry.message) {
    return NextResponse.json({ error: 'Please complete every required field.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (!services.includes(inquiry.service)) {
    return NextResponse.json({ error: 'Please select a valid service.' }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');
  const recipient = process.env.CONTACT_TO_EMAIL || gmailUser;
  if (!gmailUser || !gmailPassword || !recipient) {
    console.error('Contact email environment variables are not configured.');
    return NextResponse.json({ error: 'Email delivery is not configured yet. Please contact Ahmed directly.' }, { status: 503 });
  }

  const message: ContactInquiry = {
    name: inquiry.name,
    email: inquiry.email,
    phone: inquiry.phone || '',
    location: inquiry.location || '',
    service: inquiry.service,
    timeline: inquiry.timeline || '',
    message: inquiry.message,
  };

  try {
    const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: gmailUser, pass: gmailPassword } });
    await transporter.sendMail({
      from: `ahmedphotography website <${gmailUser}>`,
      to: recipient,
      replyTo: `${message.name} <${message.email}>`,
      subject: `New ${message.service} inquiry from ${message.name}`.replace(/[\r\n]/g, ' '),
      text: contactEmailText(message),
      html: contactEmailHtml(message),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact email delivery failed:', error);
    return NextResponse.json({ error: 'Your inquiry could not be sent right now. Please try again shortly.' }, { status: 502 });
  }
}
