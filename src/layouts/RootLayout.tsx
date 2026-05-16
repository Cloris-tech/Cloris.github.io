import { Outlet } from 'react-router-dom'

import { SiteHeader } from '../components/SiteHeader'

export function RootLayout() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <Outlet />
    </div>
  )
}
