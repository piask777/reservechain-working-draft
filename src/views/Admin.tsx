import { useState } from 'react'

const states = ['Draft', 'Under Review', 'Approved', 'Published', 'Unpublished', 'Archived'] as const
const roles = [['Editor', 'Draft content and attach source material'], ['Reviewer', 'Check evidence and request changes'], ['Publisher', 'Approve visibility after required gates'], ['Auditor', 'Read history; cannot alter prior events']]
const postTypes = [
  ['rc_program', 'Program copy, supported fields and publication status'],
  ['rc_asset_record', 'Lot, batch, container or coil identifiers and status'],
  ['rc_evidence', 'Restricted metadata and references, never public files by default'],
  ['rc_translation', 'Locale, source revision, reviewer and approval state'],
]
const boundaries = [
  ['Public REST', 'Published programs and redacted registry/passport projections', 'Read only'],
  ['Editorial REST', 'Draft content, workflow transitions and translation assignments', 'Authenticated roles'],
  ['Evidence service', 'Private upload/download grants, checksum and retention metadata', 'Restricted roles'],
  ['Integration boundary', 'Future identity and contract adapters after approvals', 'Inactive'],
]

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
        <section className="control-panel"><span className="section-index">02 / CHANNEL CONTROL</span><h2>Publication settings</h2><label><span>Language</span><select value={language} onChange={(event) => setLanguage(event.target.value)}><option>English</option><option>Spanish (planned)</option><option>Italian (planned)</option></select></label><label><span>Website mode</span><select value={mode} onChange={(event) => setMode(event.target.value)}><option>Prelaunch</option><option>Maintenance</option><option>Private review</option></select></label><p className="settings-readout">Preview: {language} / {mode}</p></section>
      </div>
      <section className="phase-block"><span className="section-index">03 / PROPOSED WORDPRESS ROLES</span><div className="role-grid">{roles.map(([role, permission]) => <article key={role}><h3>{role}</h3><p>{permission}</p></article>)}</div></section>
      <section className="audit-panel"><div><span className="section-index">04 / APPEND-ONLY CONCEPT</span><h2>Audit log</h2><p>Proposed production events are written to a separate append-only store. WordPress content revisions support editorial recovery but do not replace the security audit trail.</p></div><ol aria-live="polite">{audit.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)}</ol></section>
      <section className="phase-block mapping-block">
        <div className="section-heading"><span className="section-index">05 / PROPOSED WORDPRESS IMPLEMENTATION</span><h2>React presentation, governed CMS source.</h2><p>The public React application maps to WordPress-managed records through a versioned API. This is a proposed production design, not a live CMS connection.</p></div>
        <div className="mapping-grid">{postTypes.map(([name, purpose]) => <article key={name}><code>{name}</code><p>{purpose}</p></article>)}</div>
      </section>
      <section className="phase-block"><span className="section-index">06 / PROPOSED API BOUNDARIES</span><div className="table-wrap"><table className="control-table"><thead><tr><th>Boundary</th><th>Content</th><th>Access</th></tr></thead><tbody>{boundaries.map(([boundary, content, access]) => <tr key={boundary}><th>{boundary}</th><td>{content}</td><td>{access}</td></tr>)}</tbody></table></div></section>
      <section className="phase-block controls-grid">
        <article><span className="section-index">DOCUMENT CONTROLS</span><h3>Private by default</h3><p>Allow-listed file types, malware scanning, size limits, checksums, signed short-lived access, retention rules and redacted public projections are proposed.</p></article>
        <article><span className="section-index">TRANSLATIONS</span><h3>Revision-linked locales</h3><p>English is the source record. Spanish and Italian variants remain linked to a source revision and require translator and publisher approval before release.</p></article>
        <article><span className="section-index">REACT MAPPING</span><h3>Stable view models</h3><p>Program, registry and passport routes consume redacted API view models; Admin interactions map to authenticated workflow endpoints in production.</p></article>
      </section>
    </section>
  )
}
