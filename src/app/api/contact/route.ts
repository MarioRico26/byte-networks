// src/app/api/contact/route.ts
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

import { Resend } from 'resend'

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

const MAIL_FROM = process.env.MAIL_FROM || 'Byte Networks <onboarding@resend.dev>'
const MAIL_TO   = process.env.MAIL_TO   || 'info@bytenetworks.net'

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body
    if (!body?.name || !body?.email || !body?.message) {
      return Response.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    const key = process.env.RESEND_API_KEY
    if (!key) {
      console.error('RESEND_API_KEY is missing at runtime')
      return Response.json({ ok: false, error: 'Mail disabled' }, { status: 500 })
    }

    // Instanciar AQUÍ, no en el toplevel
    const resend = new Resend(key)

    const { data, error } = await resend.emails.send({
      from: MAIL_FROM,
      to: [MAIL_TO],
      replyTo: body.email, // correcto en Resend (camelCase)
      subject: `New contact: ${body.name} (${body.service || 'General'})`,
      html: renderHtml(body),
      text: `
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || '-'}
Company: ${body.company || '-'}
Service: ${body.service || '-'}
---
${body.message}
      `.trim(),
    })

    if (error) {
      console.error('RESEND ERROR:', error)
      return Response.json({ ok: false, error: 'Mail failed' }, { status: 500 })
    }

    return Response.json({ ok: true, id: data?.id })
  } catch (err: any) {
    console.error('CONTACT ERROR:', err?.message || err)
    return Response.json({ ok: false, error: 'Mail failed' }, { status: 500 })
  }
}