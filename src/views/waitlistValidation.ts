export type WaitlistValues = { name: string; email: string; jurisdiction: string; acknowledgement: boolean; consent: boolean }
export type WaitlistErrors = Partial<Record<keyof WaitlistValues, string>>

export function validateWaitlist(values: WaitlistValues): WaitlistErrors {
  const errors: WaitlistErrors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  if (!values.jurisdiction) errors.jurisdiction = 'Select your country or region.'
  if (!values.acknowledgement) errors.acknowledgement = 'Confirm the jurisdiction acknowledgement.'
  if (!values.consent) errors.consent = 'Consent is required for this local demonstration.'
  return errors
}

export function isWaitlistValid(values: WaitlistValues) {
  return Object.keys(validateWaitlist(values)).length === 0
}
