import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Icon from './Icon';
import { useLenis } from './SmoothScroll';
import { nav, wa, PHONE_DISPLAY } from '../data/site';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop(); else lenis.start();
  }, [open, lenis]);

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
        <div className="nav__inner container">
          <Link to="/" className="nav__logo" aria-label="Petvet Care, home">
            <Logo />
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__actions">
            <a href={wa()} target="_blank" rel="noreferrer" className="btn btn--whatsapp nav__cta">
              <Icon name="whatsapp" size={18} />
              <span className="mai">बुक करू</span>
            </a>
            <button className="nav__burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
              onClick={() => setOpen((v) => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`nav__overlay ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="nav__overlay-inner container">
          <ul className="nav__overlay-list">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className="nav__overlay-link">
                  <span className="mai nav__overlay-mai">{item.mai}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav__overlay-foot">
            <a href={wa()} target="_blank" rel="noreferrer" className="btn btn--whatsapp btn--lg">
              <Icon name="whatsapp" size={20} /> WhatsApp पर गप करू
            </a>
            <span className="nav__overlay-phone"><Icon name="phone" size={16} /> {PHONE_DISPLAY}</span>
          </div>
        </div>
      </div>
    </>
  );
}
