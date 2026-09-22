import { Link } from 'react-router-dom'
import { MetalArt } from '../components/MetalArt'

const trustSteps = [
  ['01', 'Identify', 'Create a structured lot, batch, container or coil record.'],
  ['02', 'Evidence', 'Attach proposed origin, specification and inspection evidence.'],
  ['03', 'Review', 'Apply controlled status gates and preserve the review history.'],
  ['04', 'Register', 'Publish an approved record only after required gates are met.'],
]

export function Home() {
  return (
    <>
      <section className="home-hero page-section">
        <div className="hero-copy">
          <span className="eyebrow">Industrial asset infrastructure / prelaunch</span>
          <h1>From physical reserve<br />to <em>verifiable record.</em></h1>
          <p className="lede">A proposed evidence and registry layer for responsibly structured industrial metals programs.</p>
          <div className="hero-actions"><Link className="primary-action" to="/copper">Explore programs</Link><Link className="secondary-action" to="/passport">Inspect a sample record</Link></div>
          <div className="prelaunch-strip"><span>STATUS</span><strong><i />Platform in development</strong><small>No tokens offered or sold</small></div>
        </div>
        <div className="hero-signal" aria-hidden="true">
          <div className="signal-ring"><span>RC</span></div>
          <div className="signal-label top">EVIDENCE <b>01</b></div>
          <div className="signal-label right">CONTROL <b>02</b></div>
          <div className="signal-label bottom">RECORD <b>03</b></div>
        </div>
      </section>

      <section className="page-section trust-section">
        <div className="section-heading"><span className="section-index">01 / CHAIN OF TRUST</span><h2>A record is only as credible as its evidence.</h2><p>Each proposed module separates source material, review decisions and publication status.</p></div>
        <div className="trust-grid">{trustSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="page-section programs-section">
        <div className="section-heading"><span className="section-index">02 / INITIAL PROGRAMS</span><h2>Two materials. One verification discipline.</h2></div>
        <div className="program-cards">
          <Link to="/copper" className="program-card"><MetalArt type="copper" /><div><span className="status amber">Proposed</span><h3>Ultrafine Copper Powder</h3><p>Batch and lot-level evidence structure.</p><strong>View program →</strong></div></Link>
          <Link to="/nickel" className="program-card"><MetalArt type="nickel" /><div><span className="status amber">Proposed</span><h3>Ultrafine Nickel Wire</h3><p>0.025 mm wire, coil and container records.</p><strong>View program →</strong></div></Link>
        </div>
      </section>

      <section className="page-section discipline-section">
        <div><span className="section-index">03 / STATUS DISCIPLINE</span><h2>Unknown is a valid status.</h2><p>The demonstration does not convert missing evidence into claims. Every record exposes what is planned, received, reviewed or still unconfirmed.</p></div>
        <div className="status-board">
          <div><span className="status muted">Not submitted</span><p>Evidence has not been received.</p></div>
          <div><span className="status amber">Under review</span><p>Evidence exists but is not approved.</p></div>
          <div><span className="status outline">Illustrative</span><p>Sample data, not a live asset claim.</p></div>
        </div>
      </section>

      <section className="page-section modules-section">
        <div className="section-heading"><span className="section-index">04 / SYSTEM MODULES</span><h2>Designed as controlled layers.</h2></div>
        <div className="module-grid"><article><b>01</b><h3>Asset registry</h3><p>Structured material and location records.</p></article><article><b>02</b><h3>Evidence vault</h3><p>Document status and review metadata.</p></article><article><b>03</b><h3>Asset passport</h3><p>Readable history for each proposed record.</p></article><article><b>04</b><h3>Issuance boundary</h3><p>Inactive and gated from public access.</p></article></div>
      </section>

      <section className="page-section waitlist-teaser"><span className="eyebrow">Controlled access / local prototype</span><h2>Follow the infrastructure as it develops.</h2><p>Demonstrate registration of interest without transmitting or storing personal information.</p><Link className="primary-action" to="/waitlist">Open local waitlist</Link></section>
    </>
  )
}
