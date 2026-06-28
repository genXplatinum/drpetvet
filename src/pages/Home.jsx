import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { MadhubaniDivider, Sun, Lotus, Peacock, InkFrame } from '../components/Madhubani';
import { Marquee, SketchUnderline } from '../components/Decor';
import { usePageMeta } from '../lib/seo';
import {
  site, services, why, process, coverage, stats, testimonials, doctor, wa, tel, PHONE_DISPLAY,
} from '../data/site';
import './Home.css';

export default function Home() {
  usePageMeta(
    'Petvet Care — Pashu chikitsa, ahaank angna dhari | Dr. Rajpal Singh, Darbhanga',
    'Home-visit veterinary care for cattle, pets and birds across Darbhanga and Mithila. Dr. Rajpal Singh (B.V.Sc) comes to your courtyard.'
  );

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero__inner">
          <Reveal className="hero__content" variant="up">
            <span className="hero__greet mai">{site.greeting} 🙏</span>
            <span className="hero__badge"><Icon name="location" size={15} /> {site.city} · {site.region}</span>
            <h1 className="hero__title">
              The vet who comes
              <span className="hero__title-accent"> to your courtyard.<SketchUnderline /></span>
            </h1>
            <p className="hero__tagline mai">{site.tagline}</p>
            <p className="hero__sub">
              {site.doctor} ({site.qualification}) treats your cows, buffaloes, dogs, cats and birds at home.
              No stressful trips to a clinic, no waiting around. Just good care, where your animals are.
            </p>
            <div className="hero__actions">
              <a href={wa()} target="_blank" rel="noreferrer" className="btn btn--whatsapp btn--lg">
                <Icon name="whatsapp" size={20} /> WhatsApp पर गप करू
              </a>
              <a href={tel()} className="btn btn--ghost btn--lg">
                <Icon name="phone" size={18} /> {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
        <div className="hero__scroll" aria-hidden="true"><span>Scroll</span><span className="hero__scroll-line" /></div>
      </section>

      <Marquee />

      {/* ===== GREETING / MANIFESTO ===== */}
      <section className="section manifesto">
        <div className="container manifesto__inner">
          <Reveal className="manifesto__art" variant="fade"><Lotus size={120} /></Reveal>
          <Reveal className="manifesto__text">
            <span className="tag">{site.bharEn}</span>
            <h2 className="manifesto__mai mai">{site.bhar}</h2>
            <p className="lead muted">{site.manifesto}</p>
          </Reveal>
        </div>
      </section>

      {/* ===== TRUST ===== */}
      <section className="trust">
        <MadhubaniDivider />
        <div className="container trust__row">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="trust__item" variant="up" delay={i * 80}>
              <span className="trust__value">{s.value}</span>
              <span className="trust__mai mai">{s.mai}</span>
              <span className="trust__label">{s.label}</span>
            </Reveal>
          ))}
        </div>
        <MadhubaniDivider flip />
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="tag tag--center">सेवा · Our care</span>
            <h2>Every animal, looked after</h2>
            <p className="lead muted">From a buffalo in the field to a kitten on the cot, Dr. Rajpal brings the right medicine and a calm hand to your door.</p>
          </div>
          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.id} className={`svc-card svc-card--${s.accent}`} variant="up" delay={(i % 3) * 80}>
                <InkFrame />
                <span className="svc-card__icon"><Icon name={s.icon} size={30} /></span>
                <h3 className="svc-card__title">{s.title}</h3>
                <span className="svc-card__mai mai">{s.mai}</span>
                <p className="svc-card__summary">{s.summary}</p>
                <Link to="/services" className="link svc-card__link">आर देखू <span className="link__arrow">→</span></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY ===== */}
      <section className="section why">
        <div className="container why__grid">
          <Reveal className="why__intro">
            <span className="tag tag--leaf">किएक घर सेवा · Why home visits</span>
            <h2>Care that travels,<br />so your animals don’t.</h2>
            <Peacock size={108} className="why__peacock" />
          </Reveal>
          <div className="why__cards">
            {why.map((w, i) => (
              <Reveal key={w.title} className="why__card" variant="up" delay={i * 80}>
                <span className="why__card-icon"><Icon name={w.icon} size={24} /></span>
                <div>
                  <h3 className="why__card-title">{w.title}</h3>
                  <span className="why__card-mai mai">{w.mai}</span>
                  <p className="why__card-body">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section how">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="tag tag--center tag--peacock">कोना · How it works</span>
            <h2>Booking a visit is simple</h2>
          </div>
          <ol className="how__steps">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} className="how__step" variant="up" delay={i * 80}>
                <span className="how__num mai">{p.step}</span>
                <h3 className="how__title">{p.title}</h3>
                <span className="how__mai mai">{p.mai}</span>
                <p className="how__body">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== COVERAGE ===== */}
      <section className="section coverage">
        <div className="container coverage__inner">
          <Reveal className="coverage__text">
            <span className="tag tag--indigo">इलाका · Service area</span>
            <h2>Across Darbhanga<br />& nearby villages</h2>
            <p className="lead muted">Based in {site.city}, Dr. Rajpal travels across the district every day. Not sure if your village is covered? Send a message and he’ll tell you honestly.</p>
            <a href={wa('Namaste Dr. Rajpal, do you visit my village? My location is:')} target="_blank" rel="noreferrer" className="btn btn--sindoor">
              <Icon name="whatsapp" size={18} /> मोर गाम पुछू
            </a>
          </Reveal>
          <Reveal className="coverage__map card" variant="up">
            <InkFrame />
            <Sun size={72} className="coverage__sun" />
            <ul className="coverage__pills">
              {coverage.map((c) => <li key={c} className="chip coverage__pill"><Icon name="location" size={14} /> {c}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ===== DOCTOR ===== */}
      <section className="section doctor-teaser">
        <div className="container doctor-teaser__inner">
          <Reveal className="doctor-teaser__photo" variant="up">
            <div className="doctor-teaser__frame">
              <img src={doctor.photo} alt={doctor.name} loading="lazy" />
            </div>
          </Reveal>
          <Reveal className="doctor-teaser__text">
            <span className="tag">हमरा सभक बारे · Meet the doctor</span>
            <h2>{doctor.name}</h2>
            <p className="doctor-teaser__mai mai">{doctor.nameMai} · {doctor.qualification}</p>
            <p className="lead doctor-teaser__quote">“{doctor.quote}”</p>
            <Link to="/about" className="btn btn--ghost">पूरा कथा पढ़ू <Icon name="arrow" size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="tag tag--center tag--haldi">नीक बात · Kind words</span>
            <h2>Trusted across Mithila</h2>
          </div>
          <div className="testi__grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} className="testi__card" variant="up" delay={i * 80}>
                <div className="testi__stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, j) => <Icon key={j} name="star" size={18} />)}
                </div>
                <p className="testi__quote">“{t.quote}”</p>
                <div className="testi__person">
                  <span className="testi__name">{t.name}</span>
                  <span className="testi__place">{t.place}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
