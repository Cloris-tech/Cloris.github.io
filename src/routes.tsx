import { Route, Routes } from 'react-router-dom'

import { RootLayout } from './layouts/RootLayout'
import { CaseStudyHubPage } from './pages/CaseStudyHubPage'
import { HomePage } from './pages/HomePage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudyHubPage />} />
      </Route>
    </Routes>
  )
}
