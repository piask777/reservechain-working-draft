import { useState } from 'react'

const states = ['Draft', 'Under Review', 'Approved', 'Published', 'Unpublished', 'Archived'] as const
const roles = [['Editor', 'Draft content and attach source material'], ['Reviewer', 'Check evidence and request changes'], ['Publisher', 'Approve visibility after required gates'], ['Auditor', 'Read history; cannot alter prior events']]

export function Admin() {
  const [workflow, setWorkflow] = useState<(typeof states)[number]>('Under Review')
  const [audit, setAudit] = useState(['09:00 / Demo record created as Draft', '09:12 / Status changed to Under Review'])
  const [language, setLanguage] = useState('English')
  const [mode, setMode] = useState('Prelaunch')

  function changeWorkflow(next: (typeof states)[number]) {
    if (next === workflow) return
    setWorkflow(next)
    setAudit((items) => [...items, `${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} / Demo status changed from ${workflow} to ${next}`])
  }

  return (
    <section className="page-section phase-page">
      <div className="section-heading"><span className="eyebrow">Admin / CMS architecture</span><h1>Controlled publishing workspace.</h1><p className="lede">A non-authenticated interaction prototype showing proposed role and workflow boundaries.</p></div>
      <div className="prototype-note" role="note"><strong>Prototype only</strong><span>This is not a live admin. Changes are temporary and reset when the page reloads.</span></div>
      <div className="admin-grid">
        <section className="control-panel"><span className="section-index">01 / CONTENT WORKFLOW</span><h2>Record status</h2><p>Current state: <strong>{workflow}</strong></p><div className="workflow-controls" aria-label="Set workflow status">{states.map((state) => <button type="button" aria-pressed={workflow === state} onClick={() => changeWorkflow(state)} key={state}>{state}</button>)}</div></section>
        <section className="control-panel"><span className="section-index">02 / CHANNEL CONTROL</span><h2>Publication settings</h2><label><span>Language</span><select value={language} onChange={(event) => setLanguage(event.target.value)}><option>English</option><option>German (planned)</option><option>French (planned)</option></select></label><label><span>Website mode</span><select value={mode} onChange={(event) => setMode(event.target.value)}><option>Prelaunch</option><option>Maintenance</option><option>Private review</option></select></label><p className="settings-readout">Preview: {language} / {mode}</p></section>
      </div>
      <section className="phase-block"><span className="section-index">03 / ROLE BOUNDARIES</span><div className="role-grid">{roles.map(([role, permission]) => <article key={role}><h3>{role}</h3><p>{permission}</p></article>)}</div></section>
      <section className="audit-panel"><div><span className="section-index">04 / APPEND-ONLY CONCEPT</span><h2>Audit log</h2><p>In a production system, prior events would be immutable and separately access-controlled.</p></div><ol aria-live="polite">{audit.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)}</ol></section>
    </section>
  )
}
