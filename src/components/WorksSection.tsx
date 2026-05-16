export function WorksSection() {
  return (
    <section className="section section--alt" id="works">
      <div className="section__container">
        <div className="section__head">
          <div>
            <h2 className="section__title">AI Works &amp; Practice</h2>
            <p className="section__subtitle">
              Enterprise agents, intelligent sales, and cross-industry digital transformation.
            </p>
          </div>
          <div className="tag-row">
            <span className="tag">Automotive</span>
            <span className="tag">FMCG</span>
            <span className="tag">Retail</span>
          </div>
        </div>

        <div className="works-grid">
          <article className="logic-card">
            <div className="logic-card__top">
              <div className="icon-tile icon-tile--primary">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <span className="mono-label">Framework: multi-agent</span>
            </div>
            <h3 className="logic-card__title">Enterprise Agent Matrix</h3>
            <p className="logic-card__body">
              Employee assistants (LLM + RAG) and distributor technical support — bridging legacy
              systems with modern agent capabilities.
            </p>
            <ul className="logic-card__list">
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <div>
                  <strong>Employee assistants</strong>
                  <span className="muted">Internal knowledge &amp; task orchestration.</span>
                </div>
              </li>
              <li>
                <span className="material-symbols-outlined check">check_circle</span>
                <div>
                  <strong>Distributor support</strong>
                  <span className="muted">Scaled service for complex dealer networks.</span>
                </div>
              </li>
            </ul>
          </article>

          <article className="logic-card">
            <div className="logic-card__top">
              <div className="icon-tile icon-tile--cyan">
                <span className="material-symbols-outlined">insights</span>
              </div>
              <span className="mono-label">Stack: RAG · evaluation</span>
            </div>
            <h3 className="logic-card__title">Intelligent Sales Domain</h3>
            <p className="logic-card__body">
              Chat BI and intelligent customer service — natural-language analytics and consistent
              brand-voice engagement.
            </p>
            <ul className="logic-card__list">
              <li>
                <span className="material-symbols-outlined check check--cyan">check_circle</span>
                <div>
                  <strong>Chat BI</strong>
                  <span className="muted">NL querying for sales &amp; ops metrics.</span>
                </div>
              </li>
              <li>
                <span className="material-symbols-outlined check check--cyan">check_circle</span>
                <div>
                  <strong>Intelligent customer service</strong>
                  <span className="muted">High-precision responses with policy alignment.</span>
                </div>
              </li>
            </ul>
          </article>
        </div>

        <div className="works-banner">
          <div>
            <span className="mono-label mono-label--upper">Digital transformation exposure</span>
            <div className="works-banner__names">
              <span>Daimler</span>
              <span>Wuliangye</span>
              <span>JLR</span>
            </div>
          </div>
          <div className="works-banner__divider" aria-hidden />
          <div>
            <span className="mono-label mono-label--upper">Program scale</span>
            <p className="works-banner__metric">Multi-million-dollar portfolio</p>
          </div>
        </div>

        <div className="works-accent">
          <div className="works-accent__pattern" aria-hidden />
          <div className="works-accent__content">
            <h4 className="works-accent__title">From LLM capability to measurable ROI</h4>
            <p className="works-accent__text muted">
              Systematic product frameworks, technical governance, and outcome-oriented delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
