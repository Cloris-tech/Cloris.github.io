import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './contexts/ThemeContext'
import { AppRoutes } from './routes'

export default function App() {
  const base = import.meta.env.BASE_URL
  const basename = base === '/' ? undefined : base.replace(/\/$/, '')
  return (
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}
