import { Suspense, lazy, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import WhatsAppFab from './WhatsAppFab';
import { useLenis } from './SmoothScroll';
import { ScrollTrigger } from '../lib/gsap';
import './Layout.css';

const Scene = lazy(() => import('./three/Scene'));

export default function Layout() {
  const location = useLocation();
  const lenis = useLenis();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    const id = setTimeout(() => ScrollTrigger.refresh(), 90);
    return () => clearTimeout(id);
  }, [location.pathname, lenis]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      {isHome && (
        <div className="canvas-layer" aria-hidden="true">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>
      )}

      <Nav />

      <main id="main" key={location.pathname} className="page">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
