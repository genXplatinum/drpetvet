import './Decor.css';

/* ---------- A single marigold flower (genda phool) ---------- */
export function Marigold({ size = 34, color = '#FF8A00', inner = '#FFC93C', core = '#E8730A' }) {
  const petals = (r, fill, n, rot = 0) =>
    Array.from({ length: n }).map((_, i) => {
      const a = (i / n) * 360 + rot;
      return (
        <ellipse
          key={`${fill}-${i}`}
          cx="20"
          cy={20 - r}
          rx="4.4"
          ry={r * 0.62}
          fill={fill}
          transform={`rotate(${a} 20 20)`}
        />
      );
    });
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className="marigold">
      {petals(13, color, 12)}
      {petals(9.5, inner, 12, 15)}
      <circle cx="20" cy="20" r="5.4" fill={core} />
    </svg>
  );
}

/* ---------- Mango leaf ---------- */
function MangoLeaf({ size = 20 }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 20 28" aria-hidden="true" className="mango-leaf">
      <path d="M10 1c6 5 8 13 0 26C2 14 4 6 10 1Z" fill="#1FAA59" />
      <path d="M10 4v20" stroke="#138A47" strokeWidth="1.2" />
    </svg>
  );
}

/* ---------- Toran: a festive marigold + leaf garland draped across the top ---------- */
export function Toran() {
  // Count adapts on small screens via CSS (extra hangs hidden below 560px).
  const hangs = Array.from({ length: 13 });
  return (
    <div className="toran" aria-hidden="true">
      <div className="toran__rope" />
      <div className="toran__row">
        {hangs.map((_, i) => {
          // Catenary droop: longer threads toward the centre.
          const t = i / (hangs.length - 1);
          const droop = Math.sin(t * Math.PI);
          const len = 8 + droop * 30;
          return (
            <span
              key={i}
              className={`toran__hang ${i % 4 === 0 ? 'toran__hang--alt' : ''}`}
              style={{ '--len': `${len}px`, '--i': i }}
            >
              <span className="toran__thread" style={{ height: `${len}px` }} />
              <span className="toran__flower">
                {i % 3 === 1 ? <MangoLeaf /> : <Marigold color={i % 2 ? '#FF8A00' : '#E5407A'} inner={i % 2 ? '#FFC93C' : '#FF8A00'} />}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Animated sky: sun, clouds, flying birds ---------- */
export function SkyDecor() {
  return (
    <div className="sky" aria-hidden="true">
      <svg className="sky__sun" width="160" height="160" viewBox="0 0 160 160">
        <g className="sky__rays" stroke="#FFB02E" strokeWidth="4" strokeLinecap="round">
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i / 16) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={80 + Math.cos(a) * 56}
                y1={80 + Math.sin(a) * 56}
                x2={80 + Math.cos(a) * 72}
                y2={80 + Math.sin(a) * 72}
              />
            );
          })}
        </g>
        <circle cx="80" cy="80" r="46" fill="#FFC93C" />
        <circle cx="80" cy="80" r="46" fill="none" stroke="#FF8A00" strokeWidth="3" opacity="0.5" />
      </svg>

      <span className="cloud cloud--1" />
      <span className="cloud cloud--2" />
      <span className="cloud cloud--3" />

      <svg className="sky__birds" width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="#5E4A33" strokeWidth="2.4" strokeLinecap="round">
        <path d="M6 22c5-6 9-6 13 0 4-6 8-6 13 0" />
        <path d="M40 38c4-5 7-5 10 0 3-5 6-5 10 0" />
        <path d="M70 16c4-5 7-5 10 0 3-5 6-5 10 0" />
      </svg>
    </div>
  );
}

/* ---------- Floating hand-drawn doodles (sketch feel) ---------- */
const DOODLES = {
  paw: <g><ellipse cx="12" cy="15" rx="5" ry="4" /><circle cx="6.5" cy="9.5" r="2" /><circle cx="10.5" cy="7" r="2" /><circle cx="14" cy="7" r="2" /><circle cx="17.5" cy="9.5" r="2" /></g>,
  heart: <path d="M12 20s-7-4.3-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7 2.7c0 5-7 9.3-7 9.3Z" />,
  leaf: <g><path d="M5 19c0-7 5-13 14-14 1 9-5 15-14 14Z" /><path d="M9 15c2-3 4-5 7-6.5" /></g>,
  plus: <g><rect x="5" y="5" width="14" height="14" rx="4" /><path d="M12 9v6M9 12h6" /></g>,
  butterfly: <g><path d="M12 5v14" /><path d="M12 9c-2-5-9-5-9 0s7 4 9 1M12 9c2-5 9-5 9 0s-7 4-9 1M12 14c-1.5 4-7 4-7 0M12 14c1.5 4 7 4 7 0" /></g>,
  star: <path d="M12 4l2.3 4.8 5.2.7-3.8 3.6.9 5.2L12 16.6 7.4 18.3l.9-5.2L4.5 9.5l5.2-.7L12 4Z" />,
};

export function Doodles() {
  const items = [
    { n: 'paw', c: '#E8730A', cls: 'd1' },
    { n: 'heart', c: '#E5407A', cls: 'd2' },
    { n: 'leaf', c: '#1FAA59', cls: 'd3' },
    { n: 'plus', c: '#3FA7FF', cls: 'd4' },
    { n: 'butterfly', c: '#E5407A', cls: 'd5' },
    { n: 'star', c: '#FF8A00', cls: 'd6' },
    { n: 'paw', c: '#3FA7FF', cls: 'd7' },
    { n: 'leaf', c: '#1FAA59', cls: 'd8' },
  ];
  return (
    <div className="doodles" aria-hidden="true">
      {items.map((it, i) => (
        <svg key={i} className={`doodle doodle--${it.cls}`} width="34" height="34" viewBox="0 0 24 24"
          fill="none" stroke={it.c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          {DOODLES[it.n]}
        </svg>
      ))}
    </div>
  );
}

/* ---------- Hand-drawn marker underline for an accent word ---------- */
export function SketchUnderline({ className = '' }) {
  return (
    <svg className={`sketch-underline ${className}`} viewBox="0 0 220 18" preserveAspectRatio="none" aria-hidden="true">
      <path d="M3 11c40-7 120-9 214-4" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Festive bilingual marquee ---------- */
export function Marquee() {
  const words = [
    'गाय', 'Cattle', 'भैंस', 'Buffaloes', 'कुत्ता', 'Dogs',
    'बिल्ली', 'Cats', 'पक्षी', 'Birds', 'मुर्गी', 'Poultry',
  ];
  const Strip = () => (
    <span className="marquee__strip">
      {words.map((w, i) => (
        <span key={i} className="marquee__item">
          {w}
          <Marigold size={20} />
        </span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Strip /><Strip />
      </div>
    </div>
  );
}
