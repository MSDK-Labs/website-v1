'use client'

import { useState, FormEvent } from 'react'
import Eyebrow from './Eyebrow'
import { HalftoneField } from './Textures'

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
      setStatus(response.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="cta-band" id="request-access">
      <div className="texture">
        <HalftoneField opacity={0.05} width={900} height={520} style={{ position: 'absolute', top: 0, right: 0 }} />
      </div>
      <div className="container">
        <div className="grid12">
          <div className="cta-text reveal">
            <Eyebrow n="06" onBand>Get started</Eyebrow>
            <h2 className="statement">
              Tell us your <span className="tone2">regulatory context.</span>
            </h2>
            <p className="body body--on-band-muted cta-onboard">
              We are onboarding a select number of FCA-regulated wealth managers and fintechs. Integration takes less than a day. No commitment required.
            </p>
            <p className="mono-caption mono-caption--on-band cta-nda">
              NDA available on request. Technical documentation provided to qualified organisations.
            </p>
          </div>

          <div className="cta-form reveal">
            {status === 'success' ? (
              <div className="form-msg form-msg--ok body-sm">Thank you. We will be in touch shortly.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="form-msg form-msg--err body-sm">Something went wrong. Please try again.</div>
                )}
                <input className="field" type="email" name="email" placeholder="Work email address" required />
                <button type="submit" className="btn btn--on-band form-submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Request Access'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
