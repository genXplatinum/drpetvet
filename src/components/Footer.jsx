import { Link } from 'react-router-dom';
import { Mark } from './Logo';
import Icon from './Icon';
import { MadhubaniDivider } from './Madhubani';
import { useLenis } from './SmoothScroll';
import { site, nav, services, wa, tel, PHONE_DISPLAY } from '../data/site';
import './Footer.css';

export default function Footer() {
  const lenis = useLenis();
  const year = new Date().getFullYear();

  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__top-border"><MadhubaniDivider /></div>

      <div className="container">
        <div className="footer__cta">
          <span className="tag tag--on-ink">{site.greeting}</span>
          <h2 className="footer__cta-title">
            अहाँक पशु केँ मदद चाही?<br />
            <span className="footer__cta-en">Your animal needs help?</span>
          </h2>
          <div className="footer__cta-actions">
            <a href={wa()} target="_blank" rel="noreferrer" className="btn btn--whatsapp btn--lg">
              <Icon name="whatsapp" size={20} /> WhatsApp पर गप करू
            </a>
            <a href={tel()} className="btn btn--lg footer__call">
              <Icon name="phone" size={18} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__brand-head"><Mark size={36} /> <span>Petvet Care</span></span>
            <p className="footer__tag">
              {site.doctor} · {site.qualification}. {site.taglineEn} Home visits across Darbhanga & Mithila.
            </p>
          </div>

          <nav className="footer__col" aria-label="Pages">
            <span className="footer__col-head">Explore</span>
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="footer__link">
                <span className="mai">{n.mai}</span> · {n.label}
              </Link>
            ))}
          </nav>

          <nav className="footer__col" aria-label="Services">
            <span className="footer__col-head">Services</span>
            {services.slice(0, 5).map((s) => (
              <Link key={s.id} to="/services" className="footer__link">{s.title}</Link>
            ))}
          </nav>

          <div className="footer__col" aria-label="Reach us">
            <span className="footer__col-head">Reach us</span>
            <span className="footer__link footer__link--static"><Icon name="location" size={15} /> {site.city}</span>
            <span className="footer__link footer__link--static"><Icon name="clock" size={15} /> {site.hours}</span>
            <a href={tel()} className="footer__link"><Icon name="phone" size={15} /> {PHONE_DISPLAY}</a>
          </div>
        </div>

        <p className="footer__seo">
          Petvet Care is a home-visit veterinary doctor (pashu chikitsak) in Darbhanga, Bihar.
          Dr. Rajpal Singh (B.V.Sc & A.H.) treats cows, buffaloes, dogs, cats and birds at your
          doorstep across Sundarpur, Laheriasarai, Benipur, Jale and nearby villages of the Mithila region —
          home visits, vaccination, cattle treatment and emergency animal care.
        </p>

        <div className="footer__colophon">
          <span>© {year} {site.name} · {site.region}</span>
          <span className="footer__made">
            Made with 🧡 in Mithila ·{' '}
            <a className="footer__credit" href="https://lovelace.co.in/" target="_blank" rel="noreferrer">
              Crafted by Lovelace <span aria-hidden="true">↗</span>
            </a>
          </span>
          <button className="footer__top" onClick={toTop}>
            <span className="mai">ऊपर चलू</span> <span className="footer__top-arrow">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
