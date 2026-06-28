import './Decor.css';

/* Hand-drawn marker underline for an accent word. */
export function SketchUnderline({ className = '' }) {
  return (
    <svg className={`sketch-underline ${className}`} viewBox="0 0 220 18" preserveAspectRatio="none" aria-hidden="true">
      <path d="M3 11c40-7 120-9 214-4" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

/* Festive bilingual marquee — animals in Maithili + English with ink diamonds. */
export function Marquee() {
  const words = [
    ['गाय', 'Cattle'], ['महिंस', 'Buffalo'], ['कुकुर', 'Dog'],
    ['बिलाइ', 'Cat'], ['चिड़ै', 'Bird'], ['मुर्गी', 'Poultry'],
  ];
  const Strip = () => (
    <span className="marquee__strip">
      {words.map(([m, e], i) => (
        <span key={i} className="marquee__item">
          <span className="mai">{m}</span>
          <span className="marquee__en">{e}</span>
          <span className="marquee__sep" aria-hidden="true">❖</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track"><Strip /><Strip /></div>
    </div>
  );
}
