const chips = [
  'Prompt Craft',
  'Vector DB',
  'Dual Evaluation',
  'PMP',
  'Agile',
  'IBM Data Science',
  'Design Thinking'
]

export function SkillsSection() {
  return (
    <section className="credential-strip" id="skills">
      <div className="credential-strip__container">
        <h2 className="credential-strip__title">技能与认证</h2>
        <p className="credential-strip__subtitle muted">
          技术与算法栈：Prompt 策略 / 向量库构建 / AI 与业务双维评测；项目管理与方法论认证。
        </p>
        <ul className="credential-strip__chips" role="list">
          {chips.map((label) => (
            <li key={label}>
              <span className="credential-chip">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
