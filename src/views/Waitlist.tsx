import { FormEvent, useState } from 'react'
import { validateWaitlist, WaitlistErrors, WaitlistValues } from './waitlistValidation'

const initialValues: WaitlistValues = { name: '', email: '', jurisdiction: '', acknowledgement: false, consent: false }

export function WaitlistSuccess({ onReset }: { onReset: () => void }) {
  return <section className="page-section phase-page success-state" aria-labelledby="success-title"><span className="success-mark" aria-hidden="true">OK</span><span className="eyebrow">Local demonstration complete</span><h1 id="success-title">Interest recorded in this browser session.</h1><p className="lede">No data was stored or transmitted. Closing or reloading this page clears this prototype state.</p><button type="button" className="secondary-action" onClick={onReset}>Start again</button></section>
}

export function Waitlist() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<WaitlistErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateWaitlist(values)
    setErrors(nextErrors)
    setSubmitted(Object.keys(nextErrors).length === 0)
  }

  if (submitted) return <WaitlistSuccess onReset={() => { setValues(initialValues); setSubmitted(false) }} />

  return (
    <section className="page-section phase-page waitlist-page">
      <div><span className="eyebrow">Prelaunch / registration of interest</span><h1>Follow ReserveChain development.</h1><p className="lede">Use this local-only form to demonstrate the intended registration experience.</p><div className="prototype-note" role="note"><strong>No network submission</strong><span>No data leaves your browser in this prototype. Nothing is stored after reload.</span></div></div>
      <form className="waitlist-form" noValidate onSubmit={submit}>
        <label><span>Name</span><input value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} autoComplete="name" />{errors.name && <small className="field-error" id="name-error">{errors.name}</small>}</label>
        <label><span>Email</span><input type="email" value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} autoComplete="email" />{errors.email && <small className="field-error" id="email-error">{errors.email}</small>}</label>
        <label><span>Country or region</span><select value={values.jurisdiction} onChange={(event) => setValues({ ...values, jurisdiction: event.target.value })} aria-invalid={Boolean(errors.jurisdiction)} aria-describedby={errors.jurisdiction ? 'jurisdiction-error' : undefined}><option value="">Select one</option><option>Switzerland</option><option>United Kingdom</option><option>United States</option><option>Other (outside EU/EEA)</option><option>EU/EEA</option></select>{errors.jurisdiction && <small className="field-error" id="jurisdiction-error">{errors.jurisdiction}</small>}</label>
        <fieldset><legend>Required acknowledgements</legend><label className="check-field"><input type="checkbox" checked={values.acknowledgement} onChange={(event) => setValues({ ...values, acknowledgement: event.target.checked })} aria-invalid={Boolean(errors.acknowledgement)} aria-describedby={errors.acknowledgement ? 'acknowledgement-error' : undefined} /><span>I understand no tokens are offered and future eligibility is subject to jurisdictional and compliance checks.</span></label>{errors.acknowledgement && <small className="field-error" id="acknowledgement-error">{errors.acknowledgement}</small>}<label className="check-field"><input type="checkbox" checked={values.consent} onChange={(event) => setValues({ ...values, consent: event.target.checked })} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'consent-error' : undefined} /><span>I consent to demonstrating this local registration flow.</span></label>{errors.consent && <small className="field-error" id="consent-error">{errors.consent}</small>}</fieldset>
        <button className="primary-action" type="submit">Demonstrate registration</button>
      </form>
    </section>
  )
}
