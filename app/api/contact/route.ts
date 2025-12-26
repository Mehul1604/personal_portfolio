import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const host = process.env.SMTP_HOST || 'smtp.gmail.com'
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587
    const secure = process.env.SMTP_SECURE === 'true'
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS

    if (!user || !pass) {
      console.error('SMTP_USER/SMTP_PASS not configured')
      return NextResponse.json({ error: 'SMTP configuration missing on server' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    })

    const receiver = process.env.CONTACT_RECEIVER || user

    const mail = {
      from: `${process.env.FROM_NAME || 'Website Contact'} <${user}>`,
      replyTo: email,
      to: receiver,
      subject: `Portfolio contact: ${name || email}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || 'N/A'}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    }

    await transporter.sendMail(mail)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
