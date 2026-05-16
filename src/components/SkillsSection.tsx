const chips = [
  { icon: 'analytics', label: 'IBM Data Science' },
  { icon: 'groups', label: 'Enterprise Design Thinking' },
  { icon: 'inventory_2', label: 'PMP · agile delivery' },
  { icon: 'database', label: 'Vector DB construction' },
  { icon: 'psychology', label: 'Prompt · RAG · evaluation' },
]

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="section__container">
        <div className="skills-divider-head">
          <div className="skills-divider-head__line" />
          <p className="skills-divider-head__label">Expertise &amp; accreditation</p>
          <div className="skills-divider-head__line" />
        </div>
        <p className="section__subtitle section__subtitle--center">
          Prompt strategy, vector databases, and performance evaluation systems. PMP-certified with
          agile iteration practice.
        </p>
        <div className="chip-row">
          {chips.map((c) => (
            <div key={c.label} className="chip">
              <span className="material-symbols-outlined chip__icon">{c.icon}</span>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
        <div className="skills-chart" aria-hidden>
          {[12, 24, 16, 20, 28, 14, 32, 18, 12].map((h, i) => (
            <div
              key={i}
              className="skills-chart__bar"
              style={{ height: `${Math.min(h * 3, 96)}px` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
