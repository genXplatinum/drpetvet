import { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';
import { Mark } from './Logo';
import './Loader.css';

/**
 * First-load intro: the mark pops in over handmade paper, a Maithili
 * greeting rises, then the panel lifts away. Respects reduced-motion.
 */
export default function Loader({ onComplete }) {
  const root = useRef(null);
  const cb = useRef(onComplete);
  cb.current = onComplete;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tl = gsap.timeline({ onComplete: () => { setHidden(true); cb.current?.(); } });

    if (reduced) {
      tl.to(root.current, { autoAlpha: 0, duration: 0.4 }, 0.3);
      return () => tl.kill();
    }

    tl.fromTo('.loader__mark', { scale: 0, rotate: -20 }, { scale: 1, rotate: 0, duration: 0.7, ease: 'back.out(1.7)' });
    tl.fromTo('.loader__greet', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out' }, 0.35);
    tl.fromTo('.loader__name', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.5);
    tl.to('.loader__inner', { autoAlpha: 0, duration: 0.4, ease: 'power2.in' }, '+=0.45');
    tl.to(root.current, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '-=0.1');

    return () => tl.kill();
  }, []);

  if (hidden) return null;

  return (
    <div ref={root} className="loader" role="presentation">
      <div className="loader__inner">
        <span className="loader__greet mai">गोर लागी</span>
        <div className="loader__mark"><Mark size={64} /></div>
        <div className="loader__name">
          <span className="loader__title">Petvet Care</span>
          <span className="loader__sub mai">पशु चिकित्सा, अहाँक अंगना धरि</span>
        </div>
      </div>
    </div>
  );
}
