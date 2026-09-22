import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Disclosure } from './Disclosure'

export const navigationLinks = [
  ['/', 'Overview'],
  ['/copper', 'Copper'],
  ['/nickel', 'Nickel'],
  ['/passport', 'Asset Passport'],
  ['/registry', 'Registry'],
  ['/admin', 'Admin'],
  ['/architecture', 'Architecture'],
  ['/mobile', 'Mobile'],
  ['/contract-design', 'Contract design'],
  ['/whitepaper', 'Whitepaper'],
  ['/delivery', 'Delivery'],
  ['/waitlist', 'Waitlist'],
] as const

const primaryPaths = new Set(['/', '/copper', '/nickel', '/passport', '/registry', '/waitlist'])

export function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)} aria-label="ReserveChain home">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span>RESERVECHAIN<small>VERIFIABLE ASSET INFRASTRUCTURE</small></span>
        </NavLink>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
        </button>
        <nav id="main-nav" className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
          {navigationLinks.filter(([to]) => primaryPaths.has(to)).map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>
          ))}
          <details className="nav-group">
            <summary>Planning</summary>
            <div>
              {navigationLinks.filter(([to]) => !primaryPaths.has(to)).map(([to, label]) => (
                <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>
              ))}
            </div>
          </details>
          <span className="nav-status"><i />Prelaunch</span>
        </nav>
      </header>
      <main id="main-content" key={location.pathname}>
        <Outlet />
        <Disclosure />
      </main>
      <footer className="site-footer">
        <div className="footer-brand">RESERVECHAIN <span>/ PRELAUNCH</span></div>
        <p>Illustrative platform demonstration. No wallet, payment, token, KYC or blockchain operations are active.</p>
        <div className="footer-links" aria-label="Legal notices">
          <span>Privacy by design</span><span>Anti-fraud notice</span><span>Legal status: in development</span>
        </div>
        <p className="legal-note">ReserveChain does not currently intend to offer tokens to residents/persons located in the EU/EEA. The project is not described as MiCA-compliant. Custody, insurance, Proof of Reserves, liquidity, redemption, ownership rights, returns, token supply, token price, and contract addresses are not confirmed.</p>
      </footer>
    </div>
  )
}
