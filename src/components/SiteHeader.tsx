import { useTheme } from '../contexts/ThemeContext'

const nav = [
  { id: 'home', label: 'Home' },
  { id: 'works', label: 'AI Works & Practice' },
  { id: 'skills', label: 'Skills & Certifications' },
  { id: 'contact', label: 'Contact' },
]

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#home">
          Cloris
        </a>
        <nav className="site-header__nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.id} className="site-header__link" href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <button
            type="button"
            className="btn-icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="material-symbols-outlined" aria-hidden>
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <a className="btn btn--primary btn--sm" href="/resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </header>
  )
}
