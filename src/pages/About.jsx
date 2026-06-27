import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { Sun, Fish } from '../components/Madhubani';
import { doctor, doctorGallery, stats, faqs, wa } from '../data/site';
import './About.css';

const asset = (p) => import.meta.env.BASE_URL + p;

export default function About() {
  return (
    <div className="about-page">
      <PageHeader
        accent="green"
        tagVariant="tag--green"
        tag="Meet the doctor"
        title="A village vet who"
        hindi="फ़ोन उठाता है"
        intro={doctor.headline}
      />

      <section className="section about-intro">
        <div className="container about-intro__grid">
          <Reveal className="about-intro__photo" variant="pop">
            <div className="about-intro__frame">
              <img src={doctor.photo} alt={doctor.name} loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.classList.add('is-empty'); }} />
              <span className="about-intro__placeholder"><Icon name="paw" size={52} /><span>Add /public/doctor.jpg</span></span>
            </div>
            <Sun size={76} className="about-intro__sun" />
            <div className="about-intro__cred card">
              <span className="about-intro__cred-name">{doctor.name}</span>
              <span className="about-intro__cred-role">{doctor.role}</span>
              <span className="about-intro__cred-qual">{doctor.qualification}</span>
            </div>
          </Reveal>

          <Reveal className="about-intro__text">
            {doctor.bio.map((para, i) => (
              <p key={i} className={i === 0 ? 'lead' : ''}>{para}</p>
            ))}
            <blockquote className="about-intro__quote">
              <Fish size={56} className="about-intro__fish" />
              “{doctor.quote}”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="section about-gallery">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="tag tag--center tag--green">In person</span>
            <h2>Meet Dr. Rajpal</h2>
            <p className="lead muted">The familiar face you will see at your door.</p>
          </div>
          <div className="gallery__grid">
            {doctorGallery.map((g, i) => (
              <Reveal as="figure" key={g.src} className="gallery__item" variant="pop" delay={(i % 3) * 80}>
                <img src={asset(g.src)} alt={g.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="about-stats">
        <div className="container about-stats__row">
          {stats.map((s) => (
            <Reveal key={s.label} className="about-stats__item" variant="pop">
              <span className="about-stats__value">{s.value}</span>
              <span className="about-stats__label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section about-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="tag tag--center">Good to know</span>
            <h2>Common questions</h2>
          </div>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <Reveal as="details" key={i} className="faq__item" variant="up" delay={i * 60} open={i === 0}>
                <summary className="faq__q">
                  {f.q}
                  <span className="faq__icon" aria-hidden="true"><Icon name="arrow" size={18} /></span>
                </summary>
                <p className="faq__a">{f.a}</p>
              </Reveal>
            ))}
          </div>
          <div className="about-faq__cta">
            <p className="lead">Still have a question?</p>
            <a href={wa('Namaste Dr. Rajpal, I have a question.')} target="_blank" rel="noreferrer" className="btn btn--whatsapp btn--lg">
              <Icon name="whatsapp" size={20} /> Ask on WhatsApp
            </a>
            <Link to="/services" className="link">See all services <span className="link__arrow">→</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
