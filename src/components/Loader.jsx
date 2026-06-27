import { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';
import { Mark } from './Logo';
import './Loader.css';

/**
 * First-load intro: the mark pops in, a paw-trail fills, then the warm
 * panel lifts away to reveal the courtyard. Respects reduced-motion.
 */
export default function Loader({ onComplete }) {
  const root = useRef(null);
  const cb = useRef(onComplete);
  cb.current = onComplete;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tl = gsap.timeline({
      onComplete: () => {
        setHidden(true);
        cb.current?.();
      },
    });

    if (reduced) {
      tl.to(root.current, { autoAlpha: 0, duration: 0.4 }, 0.3);
      return () => tl.kill();
    }

    tl.fromTo('.loader__mark', { scale: 0, rotate: -25 }, { scale: 1, rotate: 0, duration: 0.7, ease: 'back.out(1.8)' });
    tl.fromTo('.loader__paw', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.32, stagger: 0.13, ease: 'back.out(2)' }, 0.35);
    tl.fromTo('.loader__title', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.4);
    tl.to('.loader__inner', { autoAlpha: 0, duration: 0.4, ease: 'power2.in' }, '+=0.35');
    tl.to(root.current, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '-=0.1');

    return () => tl.kill();
  }, []);

  if (hidden) return null;

  return (
    <div ref={root} className="loader" role="presentation">
      <div className="loader__inner">
        <div className="loader__mark"><Mark size={64} /></div>
        <div className="loader__paws" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="loader__paw" style={{ '--i': i }}>🐾</span>
          ))}
        </div>
        <div className="loader__title">
          <span className="loader__name">Petvet Care</span>
          <span className="loader__sub">पशु चिकित्सा · आपके घर तक</span>
        </div>
      </div>
    </div>
  );
}
