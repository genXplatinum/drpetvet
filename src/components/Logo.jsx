/**
 * Petvet Care brand mark + wordmark.
 * Mark = a marigold roundel with a paw and a little care-heart.
 */
export function Mark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="brand-mark">
      <rect width="64" height="64" rx="16" fill="var(--saffron)" />
      <ellipse cx="32" cy="40" rx="13" ry="11" fill="var(--paper)" />
      <circle cx="18" cy="27" r="5.5" fill="var(--paper)" />
      <circle cx="27" cy="20" r="5.5" fill="var(--paper)" />
      <circle cx="37" cy="20" r="5.5" fill="var(--paper)" />
      <circle cx="46" cy="27" r="5.5" fill="var(--paper)" />
      <path
        d="M32 44.5c-3-2.2-5-3.8-5-6a2.6 2.6 0 0 1 5-1 2.6 2.6 0 0 1 5 1c0 2.2-2 3.8-5 6Z"
        fill="var(--magenta)"
      />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="logo">
      <Mark size={38} />
      <span className="logo__words">
        <span className="logo__name">Petvet Care</span>
        <span className="logo__sub">Pashu chikitsa · घर तक</span>
      </span>
    </span>
  );
}
