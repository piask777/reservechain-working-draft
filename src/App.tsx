import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Admin } from './views/Admin'
import { Architecture } from './views/Architecture'
import { Copper } from './views/Copper'
import { Delivery } from './views/Delivery'
import { Passport } from './views/Passport'
import { Home } from './views/Home'
import { Nickel } from './views/Nickel'
import { NotFound } from './views/NotFound'
import { Registry } from './views/Registry'
import { Waitlist } from './views/Waitlist'

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
        <Route path="delivery" element={<Delivery />} />
        <Route path="waitlist" element={<Waitlist />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
