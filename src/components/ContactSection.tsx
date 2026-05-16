export function ContactSection() {
  return (
    <section className="section section--contact" id="contact">
      <div className="section__container">
        <div className="contact-panel">
          <div className="contact-panel__intro">
            <h2 className="contact-panel__title">Let&apos;s connect</h2>
            <p className="muted">
              WeChat, GitHub, Xiaohongshu — or download the AI product resume (PDF).
            </p>
          </div>
          <div className="contact-panel__actions">
            <a className="btn btn--primary" href="/resume.pdf" download>
              <span className="material-symbols-outlined">download</span>
              Download PDF resume
            </a>
            <div className="contact-links">
              <a className="contact-link" href="#" aria-label="WeChat">
                <span className="material-symbols-outlined">chat</span>
                WeChat
              </a>
              <a
                className="contact-link contact-link--outline"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined">code</span>
                GitHub
              </a>
              <a className="contact-link contact-link--outline" href="#">
                <span className="material-symbols-outlined">share</span>
                Xiaohongshu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
