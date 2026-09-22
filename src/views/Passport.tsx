const evidence = [
  ['Material specification', 'Illustrative document slot', 'Not submitted'],
  ['Weight record', 'Illustrative document slot', 'Not submitted'],
  ['Origin record', 'Illustrative document slot', 'Not submitted'],
  ['Inspection report', 'Illustrative document slot', 'Not submitted'],
]

export function Passport() {
  return (
    <>
      <section className="passport-hero page-section">
        <div><span className="eyebrow">Digital Asset Passport / illustrative record</span><h1>Material identity,<br /><em>without hidden claims.</em></h1><p className="lede">A transparent view of identifiers, evidence requirements and status history for a proposed industrial asset record.</p></div>
        <aside className="record-stamp"><span>RECORD STATUS</span><strong>ILLUSTRATIVE</strong><small>Not verified / not tokenized</small></aside>
      </section>

      <section className="page-section passport-grid">
        <div className="identity-card">
          <span className="section-index">01 / IDENTITY</span><h2>Sample material record</h2>
          <dl><div><dt>Program</dt><dd>Ultrafine Nickel Wire</dd></div><div><dt>Lot ID</dt><dd>ILL-LOT-001</dd></div><div><dt>Batch ID</dt><dd>ILL-BATCH-001</dd></div><div><dt>Container ID</dt><dd>ILL-CONT-001</dd></div><div><dt>Coil ID</dt><dd>ILL-COIL-001</dd></div><div><dt>Specification</dt><dd>0.025 mm</dd></div></dl>
          <p className="sample-note">All identifiers are test labels for interface demonstration only. They do not refer to a confirmed asset, reserve, certificate or ownership right.</p>
        </div>
        <div className="passport-mark" aria-hidden="true"><span>DAP</span><small>01 / SAMPLE</small></div>
      </section>

      <section className="page-section passport-content">
        <div><span className="section-index">02 / EVIDENCE CHECKLIST</span><h2>Evidence remains explicit.</h2><p>No item is presented as complete until a future controlled review confirms it.</p></div>
        <div className="accordion-list">{evidence.map(([title, description, status]) => <details key={title}><summary><span>{title}<small>{description}</small></span><b>{status}</b></summary><p>This placeholder shows where document metadata, reviewer notes and integrity references could appear. No certificate is stored or displayed.</p></details>)}</div>
      </section>

      <section className="page-section timeline-section">
        <div><span className="section-index">03 / STATUS HISTORY</span><h2>Illustrative audit trail</h2></div>
        <ol className="timeline"><li><span>Stage 01</span><h3>Draft record created</h3><p>Interface example, not a live system event.</p></li><li><span>Stage 02</span><h3>Evidence pending</h3><p>No material evidence has been submitted.</p></li><li className="future"><span>Future gate</span><h3>Review not started</h3><p>Approval and publication remain inactive.</p></li></ol>
        <button className="disabled-action" type="button" disabled>Tokenization unavailable</button>
      </section>
    </>
  )
}
