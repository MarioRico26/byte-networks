// scripts/smtp-test.mjs
import { config } from 'dotenv'
config({ path: '.env.local' })   // <— lee tu .env.local

import nodemailer from 'nodemailer'

const {
    SMTP_HOST,
    SMTP_PORT = '587',
    SMTP_USER,
    SMTP_PASS,
    SMTP_REQUIRE_TLS = 'true',
    MAIL_FROM,
    MAIL_TO,
} = process.env

// Comprobación básica
console.log('ENV check ->', { SMTP_HOST, SMTP_USER, hasPass: Boolean(SMTP_PASS) })
if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('\nFaltan variables SMTP. Revisa tu .env.local\n')
    process.exit(1)
}

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: false,                         // STARTTLS
    requireTLS: SMTP_REQUIRE_TLS === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: { ciphers: 'TLSv1.2' },
})

try {
    console.log('\nTesting SMTP login as:', SMTP_USER)
    const info = await transporter.sendMail({
        from: MAIL_FROM || SMTP_USER,
        to: MAIL_TO || SMTP_USER,
        subject: 'SMTP TEST from Byte Networks',
        text: 'If you got this, SMTP login works 🎉',
    })
    console.log('OK -> messageId:', info.messageId)
} catch (err) {
    console.error('\nSMTP TEST ERROR:\n', err)
    process.exit(1)
}