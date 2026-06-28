import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { Sun, Fish } from '../components/Madhubani';
import { usePageMeta } from '../lib/seo';
import { doctor, doctorGallery, stats, faqs, wa } from '../data/site';
import './About.css';

const asset = (p) => import.meta.env.BASE_URL + p;

export default function About() {
  usePageMeta(
    'About Dr. Rajpal Singh — Petvet Care | Veterinary doctor, Darbhanga',
    'Dr. Rajpal Singh (B.V.Sc) is a home-visit veterinary doctor serving Sundarpur, Darbhanga and the Mithila region. His story, services and recognition.'
  );

  return (
    <div className="about-page">
      <PageHeader
        accent="peacock"
        tag="हमरा सभक बारे · The doctor"
        tagVariant="tag--peacock"
        mai={doctor.headlineMai}
        title="A village vet who actually picks up the phone."
        intro={doctor.headline}
      />

      <section className="section about-intro">
        <div className="container about-intro__grid">
          <Reveal className="about-intro__photo" variant="up">
            <div className="about-intro__frame"><img src={doctor.photo} alt={doctor.name} loading="lazy" /></div>
            <Sun size={76} className="about-intro__sun" />
            <div className="about-intro__cred card">
              <span className="about-intro__cred-name">{doctor.name}</span>
              <span className="mai about-intro__cred-mai">{doctor.nameMai}</span>
              <span className="about-intro__cred-role">{doctor.role}</span>
              <span className="about-intro__cred-qual">{doctor.qualification}</span>
            </div>
          </Reveal>
          <Reveal className="about-intro__text">
            {doctor.bio.map((para, i) => <p key={i} className={i === 0 ? 'lead' : ''}>{para}</p>)}
            <blockquote className="about-intro__quote">
              <Fish size={56} className="about-intro__fish" />
              <span className="mai about-intro__quote-mai">“{doctor.quoteMai}”</span>
              <span className="about-intro__quote-en">“{doctor.quote}”</span>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section about-gallery">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="tag tag--center tag--leaf">In person</span>
            <h2>Meet Dr. Rajpal</h2>
            <p className="lead muted">The familiar face you will see at your door.</p>
          </div>
          <div className="gallery__grid">
            {doctorGallery.map((g, i) => (
              <Reveal as="figure" key={g.src} className="gallery__item" variant="up" delay={(i % 3) * 80}>
                <img src={asset(g.src)} alt={g.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container about-stats__row">
          {stats.map((s) => (
            <Reveal key={s.label} className="about-stats__item" variant="up">
              <span className="about-stats__value">{s.value}</span>
              <span className="mai about-stats__mai">{s.mai}</span>
              <span className="about-stats__label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section about-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="tag tag--center">Good to know</span>
            <h2>Common questions</h2>
          </div>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <Reveal as="details" key={i} className="faq__item" variant="up" delay={i * 60} {...(i === 0 ? { open: true } : {})}>
                <summary className="faq__q">{f.q}<span className="faq__icon" aria-hidden="true"><Icon name="arrow" size={18} /></span></summary>
                <p className="faq__a">{f.a}</p>
              </Reveal>
            ))}
          </div>
          <div className="about-faq__cta">
            <p className="lead">Still have a question?</p>
            <a href={wa('Namaste Dr. Rajpal, I have a question.')} target="_blank" rel="noreferrer" className="btn btn--whatsapp btn--lg">
              <Icon name="whatsapp" size={20} /> WhatsApp पर गप करू
            </a>
            <Link to="/services" className="link">See all services <span className="link__arrow">→</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
