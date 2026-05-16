import { publicAsset } from '../utils/publicUrl'

const mailHref = 'mailto:cloris@example.com'

export function SiteFooter() {
  return (
    <footer className="site-footer site-footer--v3" id="contact">
      <div className="site-footer__inner site-footer__inner--v3">
        <div className="site-footer__brand-block">
          <p className="site-footer__brand">Cloris</p>
          <div className="site-footer__status" role="status">
            <span className="site-footer__status-dot" aria-hidden />
            <span>Currently In-office</span>
          </div>
          <p className="muted site-footer__tagline">
            专注 AI 应用全生命周期规划与复杂业务系统的数字化重构。
          </p>
          <p className="muted site-footer__copy">
            © {new Date().getFullYear()} Cloris. Professional Portfolio
          </p>
        </div>
        <div className="site-footer__grids">
          <div>
            <h4 className="site-footer__col-title">Connect</h4>
            <nav className="site-footer__nav" aria-label="社交">
              <a href="#">WeChat</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="#">Xiaohongshu</a>
            </nav>
          </div>
          <div>
            <h4 className="site-footer__col-title">Inquiry</h4>
            <nav className="site-footer__nav" aria-label="联系">
              <a href={mailHref}>Email</a>
              <a href={publicAsset('resume.pdf')} download>
                Resume PDF
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
