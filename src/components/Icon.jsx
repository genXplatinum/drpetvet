/**
 * Simple stroke/fill icon set for Petvet Care.
 * Usage: <Icon name="cow" size={28} />
 * All icons inherit `currentColor`.
 */
const paths = {
  cow: (
    <>
      <path d="M5 9c0-2 1.5-3 3-3 1 0 1.8.4 2.4 1M19 9c0-2-1.5-3-3-3-1 0-1.8.4-2.4 1" />
      <path d="M6.5 8.5C5 9 4 10.5 4 12.5 4 16 7.5 19 12 19s8-3 8-6.5c0-2-1-3.5-2.5-4" />
      <path d="M9 7.5C9.6 6.6 10.7 6 12 6s2.4.6 3 1.5" />
      <circle cx="9.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
      <path d="M10 15.5c.6.5 1.2.7 2 .7s1.4-.2 2-.7" />
    </>
  ),
  dog: (
    <>
      <path d="M5 6.5C4 7 3.5 8.2 4 9.5l1.2 2.8" />
      <path d="M19 6.5C20 7 20.5 8.2 20 9.5l-1.2 2.8" />
      <path d="M6 10c0-2.5 2.7-4 6-4s6 1.5 6 4c0 1.7-.6 3-1.7 4.2-.5.6-.8 1.3-.8 2.1V18a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-1.7c0-.8-.3-1.5-.8-2.1C6.6 13 6 11.7 6 10Z" />
      <circle cx="9.7" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="11" r="1" fill="currentColor" stroke="none" />
      <path d="M11 14h2l-1 1.2z" fill="currentColor" stroke="none" />
    </>
  ),
  bird: (
    <>
      <path d="M9 4.5c2.5 0 4.5 2 4.5 4.5 0 1.2.7 1.8 1.8 1.8H20l-3 3.2c-1.2 1.3-2.9 2-4.7 2A6.3 6.3 0 0 1 6 9.8 5.3 5.3 0 0 1 9 4.5Z" />
      <circle cx="9.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
      <path d="M6 9.8 3.5 8.5M11 16l-1 3.5M14 15.5l1 3.5" />
    </>
  ),
  paw: (
    <>
      <ellipse cx="12" cy="15.5" rx="4.2" ry="3.4" />
      <circle cx="6.5" cy="10.5" r="1.7" />
      <circle cx="10" cy="7.7" r="1.7" />
      <circle cx="14" cy="7.7" r="1.7" />
      <circle cx="17.5" cy="10.5" r="1.7" />
    </>
  ),
  syringe: (
    <>
      <path d="M14 4l6 6M17 7l-9 9-4 1 1-4 9-9" />
      <path d="M9.5 11.5l3 3M7 14l3 3" />
    </>
  ),
  cross: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-7 5-13 14-14 1 9-5 15-14 14Z" />
      <path d="M9 15c2-3 4-5 7-6.5" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  rupee: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 8h6M9 11h6M9 8c3.5 0 3.5 5 0 5l4 4" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.3-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7 2.7c0 5-7 9.3-7 9.3Z" />
  ),
  phone: (
    <path d="M6.5 4h3l1.3 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.3v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.4-4A8 8 0 1 1 9 19.2L4 20Z" />
      <path d="M9 9c.2 2 1.5 3.8 3.5 5 .8.4 1.3.2 1.8-.3l.6-.7 2 1-.3 1.4c-.4.7-1.4.9-2.4.6-2.8-.8-5-3-5.8-5.8-.3-1 .1-1.9.8-2.3l1.2-.3.8 2-.6.6c-.3.3-.6.6-.4 1.1Z" fill="currentColor" stroke="none" />
    </>
  ),
  location: (
    <>
      <path d="M12 21c4-4.5 7-7.8 7-11a7 7 0 1 0-14 0c0 3.2 3 6.5 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: (
    <path d="M12 4l2.3 4.8 5.2.7-3.8 3.6.9 5.2L12 16.6 7.4 18.3l.9-5.2L4.5 9.5l5.2-.7L12 4Z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function Icon({ name, size = 24, className = '', strokeWidth = 1.7 }) {
  const node = paths[name];
  if (!node) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`icon ${className}`}
    >
      {node}
    </svg>
  );
}
