'use server'

import { Resend } from 'resend'

// Where messages go, and who they're sent from. onboarding@resend.dev works
// without a verified domain but can only deliver to the Resend account owner.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'leddacahyo242@gmail.com'
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export interface ContactInput {
  name: string
  email: string
  message: string
  // Honeypot: hidden from people, filled in by bots
  company?: string
}

export type ContactResult = { ok: true } | { ok: false; error: string }

export async function sendContactMessage(
  input: ContactInput
): Promise<ContactResult> {
  const name = String(input.name ?? '').trim()
  const email = String(input.email ?? '').trim()
  const message = String(input.message ?? '').trim()

  // Pretend success so bots don't learn they were caught
  if (input.company) return { ok: true }

  if (!name || name.length > 100) {
    return { ok: false, error: 'Please enter your name (up to 100 characters).' }
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }
  if (message.length < 10 || message.length > 5000) {
    return { ok: false, error: 'Message must be between 10 and 5,000 characters.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return { ok: false, error: `Messaging is unavailable right now. Please email ${TO_EMAIL} directly.` }
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `Portfolio inquiry from ${name.replace(/[\r\n]+/g, ' ')}`,
    text: `${message}\n\n—\n${name}\n${email}\n\nSent from the portfolio contact form. Reply to this email to respond directly.`,
  })

  if (error) {
    console.error('Resend error:', error)
    return { ok: false, error: `Your message couldn't be sent. Please try again or email ${TO_EMAIL} directly.` }
  }

  return { ok: true }
}
