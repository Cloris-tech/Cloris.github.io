import { Link, useLocation } from 'react-router-dom'

import { useTheme } from '../contexts/ThemeContext'
import { publicAsset } from '../utils/publicUrl'
import { HomeNavLink } from './HomeNavLink'

const resumeHref = publicAsset('resume.pdf')

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme()
  const { pathname, hash } = useLocation()
  const h = hash || ''
  const onCaseStudies = pathname.includes('case-studies')
  const isHomePath = pathname === '/' || pathname === ''

  const linkBase = 'site-header__link site-header__link--v3'
  const isActive = (cond: boolean) => (cond ? `${linkBase} is-active` : linkBase)

  return (
    <header className="site-header site-header--v3">
      <div className="site-header__inner site-header__inner--v3">
        <Link className="site-header__brand" to="/">
          Cloris
        </Link>
        <nav className="site-header__nav site-header__nav--v3" aria-label="主导航">
          <Link className={isActive(isHomePath && (h === '' || h === '#home'))} to="/">
            首页
          </Link>
          <HomeNavLink sectionId="career" className={isActive(isHomePath && h === '#career')}>
            职场进化
          </HomeNavLink>
          <Link className={isActive(onCaseStudies)} to="/case-studies">
            作品
          </Link>
          <HomeNavLink sectionId="contact" className={isActive(isHomePath && h === '#contact')}>
            联系
          </HomeNavLink>
        </nav>
        <div className="site-header__actions site-header__actions--v3">
          <button
            type="button"
            className="btn-icon btn-icon--ghost"
            title="英文版即将上线"
            aria-disabled="true"
          >
            EN
          </button>
          <button
            type="button"
            className="btn-icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? '切换浅色模式' : '切换深色模式'}
          >
            <span className="material-symbols-outlined" aria-hidden>
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <a className="btn-v3 btn-v3--header" href={resumeHref} download>
            Resume PDF
          </a>
        </div>
      </div>
    </header>
  )
}
