import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = {
  sectionId: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

/** Anchor on home; hash Link from other routes (GitHub Pages basename-safe). */
export function HomeNavLink({ sectionId, children, className, onClick }: Props) {
  const { pathname } = useLocation()
  const onHome = pathname === '/' || pathname === ''

  if (onHome) {
    return (
      <a className={className} href={`#${sectionId}`} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <Link className={className} to={{ pathname: '/', hash: `#${sectionId}` }} onClick={onClick}>
      {children}
    </Link>
  )
}
