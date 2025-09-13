// src/app/api/contact/route.ts
// Asegura que este handler corra en Node (no Edge) y sin cache
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

import nodemailer from 'nodemailer'

type Body = {
    name: string
    email: string
    phone?: string
    company?: string
    service?: string
    message: string
}

function renderHtml(b: Body) {
    return `
    <div style="font-family:Inter,Arial,sans-serif;line-height:1.5">
      <h2>New contact from Byte Networks</h2>
      <p><strong>Name:</strong> ${b.name}</p>
      <p><strong>Email:</strong> ${b.email}</p>
      ${b.phone ? `<p><strong>Phone:</strong> ${b.phone}</p>` : ''}
      ${b.company ? `<p><strong>Company:</strong> ${b.company}</p>` : ''}
      ${b.service ? `<p><strong>Service:</strong> ${b.service}</p>` : ''}
      <hr />
      <p>${(b.message || '').replace(/\n/g, '<br/>')}</p>
    </div>
  `
}

async function sendSMTP(b: Body) {
    const {
        SMTP_HOST,
        SMTP_PORT = '587',
        SMTP_USER,
        SMTP_PASS,
        SMTP_REQUIRE_TLS = 'true',
        MAIL_FROM,
        MAIL_TO
    } = process.env

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
        throw new Error('SMTP env vars are missing')
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: false,                            // STARTTLS
        requireTLS: SMTP_REQUIRE_TLS === 'true',
        auth: { user: SMTP_USER, pass: SMTP_PASS },
        tls: { ciphers: 'TLSv1.2' },
    })

    const info = await transporter.sendMail({
        from: MAIL_FROM || SMTP_USER,
        to: MAIL_TO,
        replyTo: b.email,
        subject: `New contact: ${b.name} (${b.service || 'General'})`,
        text: `
Name: ${b.name}
Email: ${b.email}
Phone: ${b.phone || '-'}
Company: ${b.company || '-'}
Service: ${b.service || '-'}
---
${b.message}
    `.trim(),
        html: renderHtml(b),
    })

    return info.messageId
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as Body

        if (!body?.name || !body?.email || !body?.message) {
            return Response.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
        }

        const id = await sendSMTP(body)
        return Response.json({ ok: true, id })
    } catch (err: any) {
        console.error('CONTACT ERROR:', err?.message || err)
        // No exponemos detalles de SMTP al cliente
        return Response.json({ ok: false, error: 'Mail failed' }, { status: 500 })
    }
}