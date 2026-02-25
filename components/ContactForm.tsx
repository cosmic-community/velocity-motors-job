'use client'

import { useState } from 'react'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

interface ContactFormValues {
  name: string
  email: string
  message: string
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [statusMessage, setStatusMessage] = useState<string>('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setStatusMessage('Sending your message...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setStatusMessage('Thanks! Your message has been sent.')
      setValues(initialValues)
    } catch (error) {
      setStatus('error')
      setStatusMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Changed: Added contact form fields and submit handling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-brand-muted mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            required
            className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-brand-muted mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
            className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-brand-muted mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          required
          className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red"
          placeholder="Tell us about the car or service you need..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center px-6 py-3 bg-brand-red hover:bg-brand-red-light text-white font-semibold rounded-lg transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {statusMessage ? (
        <p
          className={`text-sm ${
            status === 'success' ? 'text-emerald-400' : status === 'error' ? 'text-red-400' : 'text-brand-muted'
          }`}
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  )
}