'use client'

import { useState, FormEvent } from 'react'

export default function RequestForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/mgopvpqq', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="cta-section" id="request-access">
      <div className="container">
        <div className="section-label reveal"><span>Get started</span></div>
        <h2 className="section-title reveal">Request access.</h2>
        <p className="cta-sub reveal">Structured onboarding is provided following initial technical and compliance review.</p>

        {status === 'success' ? (
          <div className="form-message success">Thank you. We will be in touch shortly.</div>
        ) : (
          <>
            {status === 'error' && (
              <div className="form-message error">Something went wrong. Please try again.</div>
            )}
            <form className="cta-form reveal" onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Work email address" required />
              <button type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting...' : 'Request Access'}
              </button>
            </form>
          </>
        )}

        <p className="cta-note reveal">Technical documentation and API reference are provided to qualified organisations.</p>
      </div>
    </section>
  )
}
