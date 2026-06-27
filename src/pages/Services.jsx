import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { CornerKolam } from '../components/Madhubani';
import { services, process, wa } from '../data/site';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page">
      <PageHeader
        tag="What we do"
        title="Doorstep care for"
        hindi="हर पशु"
        intro="Proper veterinary treatment, brought to your home, farm or gaushala. From the largest livestock to the smallest family pet, here is how Dr. Rajpal can help."
      />

      <section className="section">
        <div className="container">
          <div className="svc-list">
            {services.map((s, i) => (
              <Reveal as="article" key={s.id} className={`svc-full svc-full--${s.accent}`} variant="up" delay={(i % 2) * 90}>
                <CornerKolam size={42} className="svc-full__corner" />
                <div className="svc-full__head">
                  <span className="svc-full__icon"><Icon name={s.icon} size={34} /></span>
                  <div>
                    <h2 className="svc-full__title">{s.title}</h2>
                    <span className="desi svc-full__hindi">{s.hindi}</span>
                  </div>
                </div>
                <p className="svc-full__summary">{s.summary}</p>
                <ul className="svc-full__points">
                  {s.points.map((p) => (
                    <li key={p}><Icon name="check" size={18} className="svc-full__check" /> {p}</li>
                  ))}
                </ul>
                <a
                  href={wa(`Namaste Dr. Rajpal, I need help with: ${s.title}. My animal is `)}
                  target="_blank"
                  rel="noreferrer"
                  className="link svc-full__cta"
                >
                  <Icon name="whatsapp" size={16} /> Ask about this
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mini process recap */}
      <section className="section svc-process">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="tag tag--center tag--magenta">How it works</span>
            <h2>From call to cure</h2>
          </div>
          <div className="svc-process__row">
            {process.map((p) => (
              <Reveal key={p.step} className="svc-process__step" variant="pop">
                <span className="svc-process__num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="svc-process__cta">
            <a href={wa()} target="_blank" rel="noreferrer" className="btn btn--whatsapp btn--lg">
              <Icon name="whatsapp" size={20} /> Book a visit on WhatsApp
            </a>
            <Link to="/contact" className="btn btn--ghost btn--lg">More ways to reach us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
