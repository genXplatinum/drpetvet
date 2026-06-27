import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { MadhubaniDivider, Sun, Lotus, Peacock } from '../components/Madhubani';
import { Toran, SkyDecor, Doodles, SketchUnderline, Marquee } from '../components/Decor';
import { site, services, why, process, coverage, stats, testimonials, doctor, wa, tel, PHONE_DISPLAY } from '../data/site';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <SkyDecor />
        <Doodles />
        <Toran />
        <div className="container hero__inner">
          <Reveal className="hero__content" variant="up">
            <span className="hero__badge">
              <Icon name="location" size={15} /> {site.city} · {site.region}
            </span>
            <h1 className="hero__title">
              The vet who comes
              <span className="hero__title-accent"> to your door.
                <SketchUnderline />
              </span>
            </h1>
            <p className="hero__desi desi">पशु चिकित्सा, आपके घर तक</p>
            <p className="hero__sub">
              {site.doctor} ({site.qualification}) treats your cows, buffaloes, dogs, cats and birds
              at home. No stressful trips to a clinic, no waiting around. Just good care, where your animals are.
            </p>
            <div className="hero__actions">
              <a href={wa()} target="_blank" rel="noreferrer" className="btn btn--whatsapp btn--lg">
                <Icon name="whatsapp" size={20} /> Book a home visit
              </a>
              <a href={tel()} className="btn btn--ghost btn--lg">
                <Icon name="phone" size={18} /> {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </div>
      </section>

      {/* ===== FESTIVE MARQUEE ===== */}
      <Marquee />

      {/* ===== TRUST STRIP ===== */}
      <section className="trust">
        <MadhubaniDivider />
        <div className="container trust__row">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="trust__item" variant="pop" delay={i * 80}>
              <span className="trust__value">{s.value}</span>
              <span className="trust__label">{s.label}</span>
            </Reveal>
          ))}
        </div>
        <MadhubaniDivider flip />
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="tag tag--center">Our care</span>
            <h2>Every animal, looked after</h2>
            <p className="lead muted">
              From a buffalo in the field to a kitten on the sofa, Dr. Rajpal brings the right
              medicine and a calm hand to your door.
            </p>
          </div>

          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.id} className={`svc-card svc-card--${s.accent}`} variant="up" delay={(i % 3) * 90}>
                <span className="svc-card__icon"><Icon name={s.icon} size={30} /></span>
                <h3 className="svc-card__title">{s.title}</h3>
                <span className="svc-card__hindi desi">{s.hindi}</span>
                <p className="svc-card__summary">{s.summary}</p>
                <Link to="/services" className="link svc-card__link">
                  Learn more <span className="link__arrow">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY HOME SERVICE ===== */}
      <section className="section why">
        <div className="container why__grid">
          <Reveal className="why__intro">
            <span className="tag tag--green">Why home service</span>
            <h2>Care that travels,<br />so your animals don’t.</h2>
            <p className="lead muted">{site.manifesto}</p>
            <Lotus size={88} className="why__lotus" />
          </Reveal>

          <div className="why__cards">
            {why.map((w, i) => (
              <Reveal key={w.title} className="why__card" variant="up" delay={i * 80}>
                <span className="why__card-icon"><Icon name={w.icon} size={24} /></span>
                <div>
                  <h3 className="why__card-title">{w.title}</h3>
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
            <span className="tag tag--center tag--magenta">Aasan hai</span>
            <h2>Booking a visit is simple</h2>
            <p className="lead muted">Four steps from a worried call to a healthy animal.</p>
          </div>

          <ol className="how__steps">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} className="how__step" variant="up" delay={i * 90}>
                <span className="how__num">{p.step}</span>
                <h3 className="how__title">{p.title}</h3>
                <span className="how__hindi desi">{p.hindi}</span>
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
            <span className="tag tag--sky">Service area</span>
            <h2>Across Darbhanga<br />& nearby villages</h2>
            <p className="lead muted">
              Based in {site.city}, Dr. Rajpal travels across the district every day. Not sure if your
              village is covered? Send a message and he’ll tell you honestly.
            </p>
            <a href={wa('Namaste Dr. Rajpal, do you visit my village? My location is:')} target="_blank" rel="noreferrer" className="btn btn--saffron">
              <Icon name="whatsapp" size={18} /> Check my area
            </a>
          </Reveal>

          <Reveal className="coverage__map" variant="pop">
            <Peacock size={120} className="coverage__peacock" />
            <ul className="coverage__pills">
              {coverage.map((c) => (
                <li key={c} className="chip coverage__pill"><Icon name="location" size={14} /> {c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ===== DOCTOR TEASER ===== */}
      <section className="section doctor-teaser">
        <div className="container doctor-teaser__inner">
          <Reveal className="doctor-teaser__photo" variant="pop">
            <div className="doctor-teaser__frame">
              <img src={doctor.photo} alt={doctor.name} loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.classList.add('is-empty'); }} />
              <span className="doctor-teaser__placeholder"><Icon name="paw" size={48} /><span>Add doctor.jpg</span></span>
            </div>
            <Sun size={70} className="doctor-teaser__sun" />
          </Reveal>

          <Reveal className="doctor-teaser__text">
            <span className="tag">Meet the doctor</span>
            <h2>{doctor.name}</h2>
            <p className="doctor-teaser__qual">{doctor.qualification}</p>
            <p className="lead doctor-teaser__quote">“{doctor.quote}”</p>
            <Link to="/about" className="btn btn--ghost">
              Read his story <Icon name="arrow" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="tag tag--center">Kind words</span>
            <h2>Trusted across the district</h2>
          </div>
          <div className="testi__grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} className="testi__card" variant="up" delay={i * 90}>
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
