'use client';

import { FormEvent, useEffect, useState } from 'react';
import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react';
import { services } from '@/lib/portfolio';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function InquiryForm() {
  const [service, setService] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [feedback, setFeedback] = useState('Your details are sent securely to Ahmed.');

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('service');
    if (value && services.includes(value)) setService(value);
  }, []);

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setFeedback('Sending your inquiry…');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Your inquiry could not be sent.');
      form.reset();
      setService('');
      setStatus('success');
      setFeedback('Thank you—your inquiry has been sent to Ahmed.');
    } catch (error) {
      setStatus('error');
      setFeedback(error instanceof Error ? error.message : 'Your inquiry could not be sent. Please try again.');
    }
  }

  return <form className="inquiry-form" onSubmit={submitInquiry}>
    <div className="form-row">
      <label>Your name<input autoComplete="name" name="name" maxLength={100} required placeholder="What should I call you?"/></label>
      <label>Email address<input name="email" type="email" autoComplete="email" maxLength={160} required placeholder="you@example.com"/></label>
    </div>
    <div className="form-row">
      <label>Phone number <span className="optional">OPTIONAL</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="+92 300 0000000"/></label>
      <label>Project location <span className="optional">OPTIONAL</span><input name="location" maxLength={120} placeholder="Islamabad, Lahore, remote…"/></label>
    </div>
    <div className="form-row">
      <label>What are you imagining?<select name="service" value={service} onChange={event => setService(event.target.value)} required><option value="" disabled>Select a service</option>{services.map(item => <option key={item}>{item}</option>)}</select></label>
      <label>Target date <span className="optional">OPTIONAL</span><input name="timeline" maxLength={100} placeholder="October 2026 / flexible"/></label>
    </div>
    <label>Tell me about the project<textarea name="message" maxLength={5000} required placeholder="The idea, deliverables, location, date, and what you want people to feel."/></label>
    <label className="form-honeypot" aria-hidden="true">Company website<input name="company" tabIndex={-1} autoComplete="off"/></label>
    <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? <>Sending <LoaderCircle className="spin" size={18}/></> : status === 'success' ? <>Inquiry sent <Check size={18}/></> : <>Send inquiry <ArrowUpRight size={18}/></>}</button>
    <p className={`form-note form-note-${status}`} role="status" aria-live="polite">{feedback}</p>
  </form>;
}
