'use client'

import { useState, FormEvent } from 'react'
import Eyebrow from '@/components/Eyebrow'

export default function RequestAccess() {
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
      setStatus(response.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main>
      <section className="section" id="get-started" style={{ paddingTop: '128px' }}>
        <div className="container">
          <div className="grid12">
            <div style={{ gridColumn: '1 / 7' }} className="reveal">
              <Eyebrow n="06">Get started</Eyebrow>
              <h2 className="statement">Request <span className="tone2">access.</span></h2>
              <p className="body body--muted" style={{ marginTop: '24px' }}>
                Structured onboarding is provided following initial technical and compliance review.
              </p>
            </div>
            <div style={{ gridColumn: '8 / 13' }} className="reveal">
              {status === 'success' ? (
                <div className="body-sm">Thank you. We will be in touch shortly.</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div className="body-sm body-sm--muted" style={{ marginBottom: '16px' }}>Something went wrong. Please try again.</div>
                  )}
                  <input className="field field--light" type="email" name="email" placeholder="Work email address" required />
                  <button type="submit" className="btn btn--on-light form-submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Submitting...' : 'Request Access'}
                  </button>
                </form>
              )}
              <p className="mono-caption" style={{ marginTop: '24px' }}>
                Technical documentation and API reference are provided to qualified organisations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
