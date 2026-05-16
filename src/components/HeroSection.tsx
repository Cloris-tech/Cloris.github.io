import { ClorisMark } from './ClorisMark'

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__grid-bg" aria-hidden />
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="material-symbols-outlined eyebrow__icon" aria-hidden>
              verified_user
            </span>
            AI Agent &amp; Application Product Manager
          </p>
          <h1 className="hero__title">
            Linking business boundaries, driving AI Agent from{' '}
            <span className="text-gradient">0 to 1 implementation.</span>
          </h1>
          <p className="hero__lead">
            985 engineering Master, IBM / Deloitte consulting background. Multi-million-dollar
            product incubation and enterprise AI architecture — LLM, RAG, and tool-calling
            end-to-end. Cross-functional delivery across algorithms, business, and legal, with
            executive reporting experience.
          </p>
          <ul className="hero__bullets">
            <li>
              <span className="material-symbols-outlined" aria-hidden>
                architecture
              </span>
              LLM · RAG · Agentic systems
            </li>
            <li>
              <span className="material-symbols-outlined" aria-hidden>
                analytics
              </span>
              Enterprise strategy &amp; governance
            </li>
          </ul>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#works">
              View AI Works
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="hero__mark-wrap">
          <div className="hero__mark-glow" aria-hidden />
          <div className="hero__mark-ring">
            <ClorisMark className="hero__mark" size={320} />
          </div>
        </div>
      </div>
    </section>
  )
}
