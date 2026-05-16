export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">Cloris</p>
          <p className="muted site-footer__tag">AI product strategy &amp; implementation</p>
        </div>
        <nav className="site-footer__links" aria-label="Footer">
          <a href="#">WeChat</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#">Xiaohongshu</a>
          <a href="/resume.pdf" download>
            Resume PDF
          </a>
        </nav>
        <p className="muted site-footer__copy">© {new Date().getFullYear()} Cloris. All rights reserved.</p>
      </div>
    </footer>
  )
}
