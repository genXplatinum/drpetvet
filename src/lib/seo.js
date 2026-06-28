import { useEffect } from 'react';

const ORIGIN = 'https://drpetvet.in';

function setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el && value != null) el.setAttribute(attr, value);
}

/** Set per-route <title>, meta description, canonical and Open Graph tags. */
export function usePageMeta(title, description) {
  useEffect(() => {
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute('content') : null;

    const path = location.pathname.replace(/\/+$/, '');
    const canonical = ORIGIN + (path || '/');

    if (title) document.title = title;
    if (descEl && description) descEl.setAttribute('content', description);
    setAttr('link[rel="canonical"]', 'href', canonical);
    setAttr('meta[property="og:url"]', 'content', canonical);
    setAttr('meta[property="og:title"]', 'content', title);
    setAttr('meta[property="og:description"]', 'content', description);
    setAttr('meta[name="twitter:title"]', 'content', title);
    setAttr('meta[name="twitter:description"]', 'content', description);

    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc != null) descEl.setAttribute('content', prevDesc);
    };
  }, [title, description]);
}
