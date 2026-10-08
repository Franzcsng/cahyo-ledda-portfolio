'use client'

import { useState } from 'react'
import { sendContactMessage } from '@/app/actions/contact'

const EMAIL = 'leddacahyo242@gmail.com'
const PHONE = '+63 968 401 8571'

const EMPTY_FORM = { name: '', email: '', message: '', company: '' }

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setError('')

    try {
      const result = await sendContactMessage(formData)
      if (result.ok) {
        setStatus('sent')
        setFormData(EMPTY_FORM)
      } else {
        setStatus('error')
        setError(result.error)
      }
    } catch {
      setStatus('error')
      setError(`Your message couldn't be sent. Please email ${EMAIL} directly.`)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-lg">
            I&apos;m available for remote drafting, CAD, and BIM work. Send me a
            message about your project or open role and I&apos;ll get back to you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 pt-2 text-sm text-foreground">
            <span>{EMAIL}</span>
            <span>{PHONE}</span>
            <span>Talisay City, Negros Occidental, PH</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-card text-foreground border border-border rounded focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-card text-foreground border border-border rounded focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows={6}
              className="w-full px-4 py-3 bg-card text-foreground border border-border rounded focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          {/* Honeypot: hidden from people, bots fill it in */}
          <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {status === 'sent' && (
            <p role="status" className="text-sm text-green-400">
              Thanks! Your message was sent. I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-4 text-sm">
              <a
                href={`mailto:${EMAIL}`}
                className="text-accent hover:text-foreground transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/cahyo-ledda-9976ba329/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/cahyo.ledda/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-foreground transition-colors"
              >
                Facebook
              </a>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-8 py-3 bg-accent text-accent-foreground rounded font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
