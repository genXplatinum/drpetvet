import './Madhubani.css';

/**
 * Mithila / Madhubani folk-art motifs — the visual signature rooted in
 * Darbhanga, the home of Madhubani painting. Used as dividers, frame
 * corners and scattered decorations. All SVGs inherit `currentColor`.
 */

/* A repeating horizontal border strip (lotus-bud + double line + dots). */
export function MadhubaniDivider({ className = '', flip = false }) {
  return (
    <div className={`mb-divider ${className}`} aria-hidden="true" style={flip ? { transform: 'scaleY(-1)' } : undefined}>
      <svg width="100%" height="34" viewBox="0 0 120 34" preserveAspectRatio="xMidYMid" role="presentation">
        <defs>
          <pattern id="mb-strip" x="0" y="0" width="40" height="34" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              {/* twin baselines */}
              <path d="M0 7h40M0 27h40" />
              {/* lotus bud */}
              <path d="M20 8c-4 0-7 3-7 7 0 3 3 5 7 5s7-2 7-5c0-4-3-7-7-7Z" />
              <path d="M20 9v10M16 11c1 2 1 5 0 7M24 11c-1 2-1 5 0 7" />
              {/* side dots */}
              <circle cx="4" cy="17" r="1.6" fill="currentColor" stroke="none" />
              <circle cx="36" cy="17" r="1.6" fill="currentColor" stroke="none" />
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="120" height="34" fill="url(#mb-strip)" />
      </svg>
    </div>
  );
}

export function Sun({ size = 90, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={`mb-glyph ${className}`} aria-hidden="true"
      fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="50" cy="50" r="20" />
      <circle cx="50" cy="50" r="13" />
      <g>
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x1 = 50 + Math.cos(a) * 24;
          const y1 = 50 + Math.sin(a) * 24;
          const x2 = 50 + Math.cos(a) * 40;
          const y2 = 50 + Math.sin(a) * 40;
          return <path key={i} d={`M${x1} ${y1}L${x2} ${y2}`} />;
        })}
      </g>
      <path d="M44 48c1.5 2 3 3 6 3s4.5-1 6-3" />
      <circle cx="44" cy="44" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="56" cy="44" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Fish({ size = 70, className = '' }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 100 60" className={`mb-glyph ${className}`} aria-hidden="true"
      fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 30c12-18 44-18 60 0-16 18-48 18-60 0Z" />
      <path d="M68 30c8-7 16-9 24-9-3 6-3 12 0 18-8 0-16-2-24-9Z" />
      <circle cx="26" cy="26" r="2.4" fill="currentColor" stroke="none" />
      <path d="M40 16c2 9 2 19 0 28M52 18c1.5 8 1.5 16 0 24" />
    </svg>
  );
}

export function Lotus({ size = 72, className = '' }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 100 70" className={`mb-glyph ${className}`} aria-hidden="true"
      fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 14c6 10 6 26 0 40-6-14-6-30 0-40Z" />
      <path d="M50 54c-9-3-18-12-22-26 11 2 19 9 22 22M50 54c9-3 18-12 22-26-11 2-19 9-22 22" />
      <path d="M50 56c-14-2-26-6-34-14 8 14 20 20 34 20s26-6 34-20c-8 8-20 12-34 14Z" />
    </svg>
  );
}

export function Peacock({ size = 90, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={`mb-glyph ${className}`} aria-hidden="true"
      fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 78c-2-10-1-22 6-30 5-6 13-8 18-14" />
      <circle cx="66" cy="30" r="6" />
      <path d="M66 24c2-3 6-4 9-3" />
      <circle cx="66" cy="30" r="2" fill="currentColor" stroke="none" />
      {/* tail feathers */}
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (-50 + i * 25) * (Math.PI / 180);
        const x = 40 + Math.cos(a) * 36;
        const y = 78 + Math.sin(a) * 36;
        return (
          <g key={i}>
            <path d={`M40 78L${x} ${y}`} />
            <circle cx={x} cy={y} r="4" />
          </g>
        );
      })}
    </svg>
  );
}

/* Decorative corner flourish for framed cards. */
export function CornerKolam({ size = 46, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" className={`mb-glyph ${className}`} aria-hidden="true"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 44V20c0-8 6-14 14-14h24" />
      <path d="M6 30c8 0 14-6 14-14" />
      <circle cx="20" cy="16" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
