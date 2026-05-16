import { Link } from 'react-router-dom'

import { publicAsset } from '../utils/publicUrl'

const resumeHref = publicAsset('resume.pdf')

export function HeroSection() {
  return (
    <section className="hero-v3" id="home">
      <div className="hero-v3__inner">
        <div className="hero-v3__avatar-wrap">
          <div className="hero-v3__avatar" aria-hidden>
            <span className="hero-v3__avatar-mark">Y</span>
          </div>
          <p className="hero-v3__avatar-hint muted">形象照占位 · LOGO 字标「Y」</p>
        </div>
        <div className="hero-v3__copy">
          <div>
            <h1 className="hero-v3__name">Cloris</h1>
            <p className="hero-v3__role">AI 应用与复杂系统产品负责人</p>
          </div>
          <p className="hero-v3__slogan">
            精准定义智能化场景，擅长通过 AI 技术重构复杂系统，驱动业务指标全链路闭环，为企业数字化转型提供决策底座。
          </p>
          <div className="hero-v3__ctas">
            <a className="btn-v3 btn-v3--fill" href={resumeHref} download>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                download
              </span>
              下载简历
            </a>
            <Link className="btn-v3 btn-v3--outline" to="/case-studies">
              查看作品集
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
