import './Madhubani.css';

/**
 * Mithila / Madhubani folk-art motifs in bold ink linework — the visual
 * signature rooted in Darbhanga. Dividers, frames, and scattered glyphs.
 * All SVGs inherit `currentColor`.
 */

/* Bold double-line border strip (twin rails + lotus-bud + dots). */
export function MadhubaniDivider({ className = '', flip = false }) {
  return (
    <div className={`mb-divider ${className}`} aria-hidden="true" style={flip ? { transform: 'scaleY(-1)' } : undefined}>
      <svg width="100%" height="40" viewBox="0 0 120 40" preserveAspectRatio="xMidYMid" role="presentation">
        <defs>
          <pattern id="mb-strip" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 7h40M0 11h40M0 29h40M0 33h40" />
              <path d="M20 9c-5 0-8 3.5-8 8 0 3.5 3.5 6 8 6s8-2.5 8-6c0-4.5-3-8-8-8Z" />
              <path d="M20 10v12M15 13c1.5 2.5 1.5 6 0 8.5M25 13c-1.5 2.5-1.5 6 0 8.5" />
              <circle cx="4" cy="20" r="2.2" fill="currentColor" stroke="none" />
              <circle cx="36" cy="20" r="2.2" fill="currentColor" stroke="none" />
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="120" height="40" fill="url(#mb-strip)" />
      </svg>
    </div>
  );
}

/* Ornamental corner frame for panels — renders 4 corner flourishes. */
export function InkFrame({ className = '' }) {
  const Corner = ({ t }) => (
    <svg className="mb-frame__c" viewBox="0 0 44 44" aria-hidden="true" style={t}
      fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 40V18c0-8 6-14 14-14h22" />
      <path d="M4 28c9 0 14-5 14-14" />
      <circle cx="18" cy="14" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  );
  return (
    <span className={`mb-frame ${className}`} aria-hidden="true">
      <Corner t={{ top: 8, left: 8 }} />
      <Corner t={{ top: 8, right: 8, transform: 'scaleX(-1)' }} />
      <Corner t={{ bottom: 8, left: 8, transform: 'scaleY(-1)' }} />
      <Corner t={{ bottom: 8, right: 8, transform: 'scale(-1,-1)' }} />
    </span>
  );
}

export function Sun({ size = 96, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={`mb-glyph ${className}`} aria-hidden="true"
      fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="50" cy="50" r="20" />
      <circle cx="50" cy="50" r="13" />
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i / 16) * Math.PI * 2;
        const r1 = i % 2 ? 24 : 26, r2 = i % 2 ? 38 : 44;
        return <path key={i} d={`M${50 + Math.cos(a) * r1} ${50 + Math.sin(a) * r1}L${50 + Math.cos(a) * r2} ${50 + Math.sin(a) * r2}`} />;
      })}
      <path d="M43 48c1.6 2.2 3.4 3.3 7 3.3s5.4-1.1 7-3.3" />
      <circle cx="43" cy="44" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="57" cy="44" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Fish({ size = 76, className = '' }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 100 60" className={`mb-glyph ${className}`} aria-hidden="true"
      fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 30c12-19 46-19 62 0-16 19-50 19-62 0Z" />
      <path d="M70 30c8-7 16-9 24-9-3 6-3 12 0 18-8 0-16-2-24-9Z" />
      <circle cx="27" cy="25" r="2.6" fill="currentColor" stroke="none" />
      <path d="M40 15c2 10 2 20 0 30M52 17c1.6 8 1.6 18 0 26M64 20c1.2 6 1.2 14 0 20" />
    </svg>
  );
}

export function Lotus({ size = 80, className = '' }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 100 70" className={`mb-glyph ${className}`} aria-hidden="true"
      fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 12c6 11 6 28 0 42-6-15-6-31 0-42Z" />
      <path d="M50 54c-10-3-19-13-23-27 12 2 20 9 23 23M50 54c10-3 19-13 23-27-12 2-20 9-23 23" />
      <path d="M50 56c-15-2-28-6-36-15 8 15 21 21 36 21s28-6 36-21c-8 9-21 13-36 15Z" />
    </svg>
  );
}

export function Peacock({ size = 100, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={`mb-glyph ${className}`} aria-hidden="true"
      fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 80c-2-11-1-23 6-31 5-6 14-9 19-15" />
      <circle cx="66" cy="29" r="6.5" />
      <path d="M66 22c2-3 6-4 10-3" />
      <circle cx="66" cy="29" r="2.2" fill="currentColor" stroke="none" />
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (-58 + i * 23) * (Math.PI / 180);
        const x = 40 + Math.cos(a) * 38, y = 80 + Math.sin(a) * 38;
        return (
          <g key={i}>
            <path d={`M40 80L${x} ${y}`} />
            <circle cx={x} cy={y} r="4.5" />
            <circle cx={x} cy={y} r="1.6" fill="currentColor" stroke="none" />
          </g>
        );
      })}
    </svg>
  );
}

/* Decorative corner flourish (single). */
export function CornerKolam({ size = 48, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" className={`mb-glyph ${className}`} aria-hidden="true"
      fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 44V20c0-8 6-14 14-14h24" />
      <path d="M6 30c8 0 14-6 14-14" />
      <circle cx="20" cy="16" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
