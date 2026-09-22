import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'
import { navigationLinks } from './components/Layout'
import { ProgramView } from './components/ProgramView'
import { filterRegistry, registryRecords } from './views/registryData'
import { WaitlistSuccess } from './views/Waitlist'
import { isWaitlistValid, validateWaitlist, WaitlistValues } from './views/waitlistValidation'

function renderRoute(path: string) {
  return renderToStaticMarkup(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)
}

describe('asset registry filtering', () => {
  it('searches identifiers without case sensitivity', () => {
    const result = filterRegistry(registryRecords, 'coil-nw-b01', 'All', 'All')
    expect(result.map((record) => record.id)).toEqual(['RC-DEMO-NW-001'])
  })

  it('combines material and evidence filters and supports empty results', () => {
    expect(filterRegistry(registryRecords, '', 'Copper powder', 'Incomplete')).toHaveLength(1)
    expect(filterRegistry(registryRecords, 'not-present', 'All', 'All')).toEqual([])
  })
})

describe('inactive tokenization', () => {
  it('renders a disabled, plainly labelled program control', () => {
    const html = renderToStaticMarkup(<MemoryRouter><ProgramView type="copper" title="Test" subtitle="Test" description="Test" fields={[]} evidence={[]} /></MemoryRouter>)
    expect(html).toContain('Tokenization inactive')
    expect(html).toMatch(/<button[^>]*disabled=""[^>]*>Tokenization unavailable<\/button>/)
  })

  it('marks every registry record as inactive', () => {
    const html = renderRoute('/registry')
    expect(html.match(/>Inactive<\/span>/g)).toHaveLength(registryRecords.length)
    expect(html).toContain('Illustrative records')
  })
})

describe('navigation and routes', () => {
  it.each([
    ['/registry', 'Asset Registry'],
    ['/admin', 'Controlled publishing workspace.'],
    ['/architecture', 'Architecture Explorer'],
    ['/mobile', 'Mobile Experience'],
    ['/contract-design', 'Contract Design'],
    ['/whitepaper', 'Whitepaper &amp; Localization'],
    ['/delivery', 'Delivery Plan'],
    ['/waitlist', 'Follow ReserveChain development.'],
  ])('renders %s as a dedicated route', (path, heading) => {
    expect(renderRoute(path)).toContain(heading)
  })

  it('links to every phase two route and preserves an actual not-found view', () => {
    const paths = navigationLinks.map(([path]) => path)
    expect(paths).toEqual(expect.arrayContaining(['/registry', '/admin', '/architecture', '/mobile', '/contract-design', '/whitepaper', '/delivery', '/waitlist']))
    expect(renderRoute('/missing-record')).toContain('This record does not exist.')
  })

  it('exposes proposed implementation boundaries without presenting live functions', () => {
    const admin = renderRoute('/admin')
    const architecture = renderRoute('/architecture')
    const contract = renderRoute('/contract-design')
    expect(admin).toContain('PROPOSED WORDPRESS IMPLEMENTATION')
    expect(admin).toContain('rc_asset_record')
    expect(architecture).toContain('ROLE-PERMISSION MATRIX')
    expect(architecture).toContain('TAMPER-EVIDENT AUDIT EXAMPLE')
    expect(contract).toContain('Mainnet prohibited')
    expect(contract).toContain('No contract is deployed, compiled or connected')
  })
})

describe('waitlist validation and success eligibility', () => {
  const valid: WaitlistValues = { name: 'Sample User', email: 'sample@example.test', jurisdiction: 'Switzerland', acknowledgement: true, consent: true }

  it('reports all required errors for an empty submission', () => {
    const errors = validateWaitlist({ name: '', email: '', jurisdiction: '', acknowledgement: false, consent: false })
    expect(Object.keys(errors)).toEqual(['name', 'email', 'jurisdiction', 'acknowledgement', 'consent'])
    expect(isWaitlistValid({ ...valid, consent: false })).toBe(false)
  })

  it('accepts a complete valid submission for the deterministic success state', () => {
    expect(validateWaitlist(valid)).toEqual({})
    expect(isWaitlistValid(valid)).toBe(true)
    const success = renderToStaticMarkup(<WaitlistSuccess onReset={() => undefined} />)
    expect(success).toContain('Interest recorded in this browser session.')
    expect(success).toContain('No data was stored or transmitted.')
  })
})
