const milestones = [
  {
    dates: '2018.07 — 2021.05',
    org: 'IBM 中国',
    role: '咨询顾问',
    positioning: '数字化转型与蓝图设计基因',
    value:
      '主导多个 500 强客户需求梳理与业务蓝图设计，确保数字化转型方案从战略到落地的全过程完整性。',
    dot: 'ibm' as const
  },
  {
    dates: '2021.06 — 2023.05',
    org: '德勤数字科技',
    role: '资深产品经理',
    positioning: '0→1 产品孵化与多客户交付',
    value:
      '成功孵化 War Room 数据决策平台，协助部门获得千万级产品孵化基金，实现标准化产品的高效交付。',
    dot: 'deloitte' as const
  },
  {
    dates: '2023.06 — 至今',
    org: '捷豹路虎',
    role: 'Lead & AI 产品经理',
    positioning: '企业级 AI Agent 与复杂系统',
    value:
      '规划企业级 AI 应用整体架构，统筹 LLM、RAG 及 Agent 应用的全生命周期落地，重构内部协作流。',
    dot: 'jlr' as const
  }
]

export function CareerTimelineSection() {
  return (
    <section className="career-timeline" id="career" aria-labelledby="career-heading">
      <h2 id="career-heading" className="career-timeline__title">
        7 年+ 职场进化史
      </h2>
      <div className="career-timeline__wrap">
        <div className="career-timeline__line" aria-hidden />
        <div className="career-timeline__grid">
          {milestones.map((m) => (
            <div key={m.org} className="career-timeline__col">
              <div
                className={`career-timeline__dot career-timeline__dot--${m.dot}`}
                aria-hidden
              />
              <div className="career-timeline__meta">
                <span className="career-timeline__dates">{m.dates}</span>
                <h3 className="career-timeline__org">{m.org}</h3>
                <p className="career-timeline__role">{m.role}</p>
              </div>
              <div className="career-timeline__card logic-card-v3">
                <p className="career-timeline__positioning">{m.positioning}</p>
                <p className="career-timeline__value">{m.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
