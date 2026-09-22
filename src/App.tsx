import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Admin } from './views/Admin'
import { Architecture } from './views/Architecture'
import { Copper } from './views/Copper'
import { Delivery } from './views/Delivery'
import { Passport } from './views/Passport'
import { Home } from './views/Home'
import { Mobile } from './views/Mobile'
import { Nickel } from './views/Nickel'
import { NotFound } from './views/NotFound'
import { Registry } from './views/Registry'
import { SmartContract } from './views/SmartContract'
import { Waitlist } from './views/Waitlist'
import { Whitepaper } from './views/Whitepaper'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="copper" element={<Copper />} />
        <Route path="nickel" element={<Nickel />} />
        <Route path="passport" element={<Passport />} />
        <Route path="registry" element={<Registry />} />
        <Route path="admin" element={<Admin />} />
        <Route path="architecture" element={<Architecture />} />
        <Route path="mobile" element={<Mobile />} />
        <Route path="contract-design" element={<SmartContract />} />
        <Route path="whitepaper" element={<Whitepaper />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="waitlist" element={<Waitlist />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
