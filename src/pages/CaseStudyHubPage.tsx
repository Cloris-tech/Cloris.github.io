import { Link } from 'react-router-dom'

import { SiteFooter } from '../components/SiteFooter'

const IMG_CASE1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCZoFAd8rkdIUqWGNLw1pG4sB27tZz4jeopzw8aPhR6i7euogvaBs-FErzqDjsiSzrfuraoLcB-pUepc1xPwhGDH5Nq_XMFzdavw5Q8vR8Est1L_P1HnAQWNU9-B701UWC4Zx-1L0MhwzYI-HETuEKWxbGkToMZ2g9r6kHUYY1MNtZDujFib2iod7szD17X4R_OyTFg7Ltsq18SUV9htNbB5AZv3EHE9xPBol6cfXT6RisDNRpFPcRq9qXaOMk69tvuUb2wvvNuo4E'

const IMG_CASE2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDB3bvKIuGh68Lnn622CiEM4YKK7i35Cbxh9zdIKlCmqyVClaaHKF1LFkZR9-Eekuqsw8xeE9Smr4b6KsqkcAgI7g0tXICHC8mDxTk0kxzinRBvN0ZqeobzVKFFhZIUV7FsxslcsQwoCvGHZMZRX2WoH8jqUe6midYEl8Slc_W7zqjezWZd966sXXzvwNHzlKv5Qr7tAFLQYgK2yP7vMgcJ-XzmrAPgga1Y96lJFCL3BxPwiIVlq-B_7TE89vijXuFRnlDyKLXCXRA'

export function CaseStudyHubPage() {
  return (
    <>
      <main className="case-hub">
        <section className="case-hub__section case-hub__section--split" id="case-01">
          <div className="case-hub__inner">
            <div className="case-hub__copy case-hub__copy--narrow">
              <span className="case-hub__eyebrow">Case Study 01</span>
              <h1 className="case-hub__h1">JLR 员工智能助手</h1>
              <p className="case-hub__lead">
                在大规模组织中利用大语言模型（LLM）重塑员工服务体验，从传统知识库向具备行动能力的智能代理转型。
              </p>
              <ul className="case-hub__bullets">
                <li>
                  <span className="material-symbols-outlined case-hub__icon">hub</span>
                  <div>
                    <strong>AI 架构与范式</strong>
                    <span className="muted">
                      集成 RAG、CoT 以及多维 Tool Calling，确保回答的逻辑性与实时性。
                    </span>
                  </div>
                </li>
                <li>
                  <span className="material-symbols-outlined case-hub__icon">analytics</span>
                  <div>
                    <strong>痛点与场景分析</strong>
                    <span className="muted">
                      基于频次-复杂度矩阵锁定核心场景；工程化打通 Qwen 知识库、HRM 与工单体系。
                    </span>
                  </div>
                </li>
                <li>
                  <span className="material-symbols-outlined case-hub__icon">verified_user</span>
                  <div>
                    <strong>双维评测与风控</strong>
                    <span className="muted">
                      建立准确率与人工接管率的双重评估体系，平衡业务效率与内容合规风险。
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="case-hub__media">
              <div className="case-hub__media-frame">
                <img className="case-hub__img" src={IMG_CASE1} alt="" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="case-hub__placeholder dashed-placeholder-v3">
            <span>🔍 查看 AI 智能代理功能链路与架构画布</span>
          </div>
        </section>

        <section className="case-hub__section case-hub__section--split case-hub__section--reverse" id="case-02">
          <div className="case-hub__inner">
            <div className="case-hub__media case-hub__media--first">
              <div className="case-hub__media-frame case-hub__media-frame--wide">
                <img className="case-hub__img" src={IMG_CASE2} alt="" loading="lazy" />
              </div>
            </div>
            <div className="case-hub__copy case-hub__copy--narrow">
              <span className="case-hub__eyebrow">Case Study 02</span>
              <h2 className="case-hub__h1">销售域语音与 AIGC</h2>
              <p className="case-hub__lead">
                通过 ASR + 语义理解 + 规则引擎与生成式 AI 的深度融合，攻克销售沟通过程中不可量化、难以回溯的业务痛点。
              </p>
              <div className="case-hub__cards">
                <div className="case-hub__mini-card">
                  <h4>非结构化语音转数据</h4>
                  <p className="muted">
                    将原始通话记录转化为可运营、可管理的行为逻辑，打通业务、IT 与算法三方的协同壁垒。
                  </p>
                </div>
                <div className="case-hub__mini-card">
                  <h4>生成式融合架构</h4>
                  <p className="muted">
                    利用 AIGC 技术自动生成销售摘要与改进建议，实现从实时监控到决策辅助的闭环。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="case-hub__placeholder dashed-placeholder-v3">
            <span>🔍 查看非结构化数据转化与销售看板 UI</span>
          </div>
        </section>

        <section className="case-hub__section case-hub__section--center" id="case-03">
          <div className="case-hub__inner case-hub__inner--stack">
            <div className="case-hub__intro">
              <span className="case-hub__eyebrow">Case Study 03</span>
              <h2 className="case-hub__h1">复杂系统数字化转型</h2>
              <p className="case-hub__lead case-hub__lead--center">
                针对跨行业头部企业的系统性重构，涵盖政策产品化、战时指挥中心及合规治理体系。
              </p>
            </div>
            <div className="case-hub__tri-grid">
              <article className="case-hub__tile">
                <div className="case-hub__tile-icon">
                  <span className="material-symbols-outlined">transform</span>
                </div>
                <h3 className="case-hub__tile-title">增值服务数字化</h3>
                <p className="muted">
                  VME 政策产品化重构，将复杂的后台规则转化为直观的一线作业工具，提升运营效能。
                </p>
              </article>
              <article className="case-hub__tile">
                <div className="case-hub__tile-icon">
                  <span className="material-symbols-outlined">query_stats</span>
                </div>
                <h3 className="case-hub__tile-title">War Room 平台</h3>
                <p className="muted">
                  实现从 0 到 1 的孵化，管理千万级基金配置。打造支撑高层决策的实时数据指挥仓。
                </p>
              </article>
              <article className="case-hub__tile">
                <div className="case-hub__tile-icon">
                  <span className="material-symbols-outlined">corporate_fare</span>
                </div>
                <h3 className="case-hub__tile-title">头部车企与传统巨头</h3>
                <p className="muted">
                  戴姆勒忠诚度计划体系构建；五粮液违规处理与渠道合规数字化治理（纯文本逻辑重塑）。
                </p>
              </article>
            </div>
          </div>
          <div className="case-hub__placeholder dashed-placeholder-v3">
            <span>🔍 查看千万级平台商业计划书框架与敏捷迭代路线图</span>
          </div>
        </section>

        <section className="case-hub__back">
          <Link className="btn btn--ghost" to="/">
            返回聚合主页
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
