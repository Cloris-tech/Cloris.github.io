import { Link } from 'react-router-dom'

const projects = [
  {
    icon: 'neurology',
    title: 'JLR 员工智能助手',
    badge: 'ACTIVE',
    tags: ['LLM', 'RAG', 'Tool Calling'],
    body: '端到端的 AI 产品全周期规划，从底层模型选型到上层业务逻辑闭环，构建企业级智能体生态。'
  },
  {
    icon: 'keyboard_voice',
    title: '语音 + AIGC 应用',
    badge: 'RETAIL',
    tags: ['ASR', 'NLU', 'Rules Engine'],
    body: '针对汽车零售场景，结合 ASR 语音识别与 AIGC 语义理解，通过复杂的规则引擎优化到店转化效率。'
  },
  {
    icon: 'hub',
    title: '复杂系统数字化转型',
    badge: 'DATA',
    tags: ['B-Side', 'Big Data'],
    body: '主导千万级数据平台孵化，打通多维度业务数据链路，为大型组织提供增值服务与决策支持。'
  }
]

export function WorksSection() {
  return (
    <section className="works-matrix" id="works">
      <div className="works-matrix__container">
        <h2 className="works-matrix__title">AI Project Matrix</h2>
        <div className="works-matrix__grid">
          {projects.map((p) => (
            <article key={p.title} className="logic-card-v3 logic-card-v3--tall">
              <div className="logic-card-v3__head">
                <span className="material-symbols-outlined logic-card-v3__icon">{p.icon}</span>
                <span className="logic-card-v3__badge">{p.badge}</span>
              </div>
              <div>
                <h3 className="logic-card-v3__title">{p.title}</h3>
                <div className="logic-card-v3__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="logic-card-v3__tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="logic-card-v3__body">{p.body}</p>
            </article>
          ))}
        </div>
        <div className="works-matrix__more">
          <Link className="btn-v3 btn-v3--fill" to="/case-studies">
            进入案例复盘 Hub
            <span className="material-symbols-outlined" aria-hidden>
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
