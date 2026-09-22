const screens = [
  ['01', 'Portfolio', 'Read-only approved records and evidence status'],
  ['02', 'Review queue', 'Assigned checks with explicit pending states'],
  ['03', 'Field capture', 'Draft metadata and document handoff after authentication'],
  ['04', 'Alerts', 'Workflow notices without sensitive evidence in the message'],
]

export function Mobile() {
  return (
    <section className="page-section phase-page">
      <div className="section-heading"><span className="eyebrow">iOS + Android / proposed</span><h1>Mobile Experience</h1><p className="lede">A responsive, coded view of the planned companion client. It is not an installable application and has no live notifications or account connection.</p></div>
      <div className="mobile-showcase">
        <div className="phone-frame" aria-label="Illustrative mobile review queue"><div className="phone-bar"><span>ReserveChain</span><small>PRELAUNCH</small></div><div className="phone-content"><span className="section-index">REVIEW QUEUE</span><h2>2 draft records</h2><article><b>ILL-COIL-001</b><span className="status amber">Evidence pending</span><p>Illustrative nickel wire record</p></article><article><b>ILL-BATCH-002</b><span className="status muted">Draft</span><p>Illustrative copper powder record</p></article><button type="button" disabled>Wallet inactive</button></div></div>
        <div><span className="section-index">PLANNED CLIENT AREAS</span><div className="mobile-feature-grid">{screens.map(([number, name, detail]) => <article key={name}><b>{number}</b><h3>{name}</h3><p>{detail}</p></article>)}</div></div>
      </div>
      <section className="phase-block controls-grid">
        <article><span className="section-index">SHARED API + AUTH</span><h3>One policy boundary</h3><p>Web and mobile clients use the same versioned API, role policy and redacted view models. Proposed short-lived sessions, MFA and device revocation remain server-enforced.</p></article>
        <article><span className="section-index">NOTIFICATIONS</span><h3>Minimal payloads</h3><p>Future push messages carry an opaque record reference and event type. Sensitive evidence is fetched only after authentication; email and push providers are unselected.</p></article>
        <article><span className="section-index">ACCOUNT OWNERSHIP</span><h3>Owner-controlled release</h3><p>Apple and Google developer accounts, signing keys, listings, privacy declarations and billing must be held by the project owner, not an implementation vendor.</p></article>
      </section>
      <section className="phase-block gate-grid"><article><span>01</span><h3>Internal build</h3><p>Accessibility, security and device coverage checks.</p></article><article><span>02</span><h3>TestFlight / Play testing</h3><p>Owner-approved testers, feedback triage and privacy review.</p></article><article><span>03</span><h3>Store review</h3><p>Approved copy, disclosures, support process and account readiness.</p></article><article><span>04</span><h3>Release decision</h3><p>Explicit owner approval after all prior gates pass.</p></article></section>
      <section className="boundary-callout"><span className="status muted">Inactive functions</span><h2>No wallet, token, transfer or redemption controls.</h2><p>Those functions remain absent unless legal, custody, security, contract audit and store-policy gates are completed and approved.</p></section>
    </section>
  )
}
