import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { Cow, Buffalo } from './animals/Bovine';
import Dog from './animals/Dog';
import Cat from './animals/Cat';
import Bird from './animals/Bird';

/* Drifting marigold petals for a little life in the air. */
function Petals({ reduced }) {
  const ref = useRef();
  const petals = useMemo(
    () =>
      Array.from({ length: 16 }).map(() => ({
        x: (Math.random() - 0.5) * 9,
        y: Math.random() * 4 + 0.5,
        z: (Math.random() - 0.5) * 3,
        s: Math.random() * 0.5 + 0.5,
        spd: Math.random() * 0.3 + 0.15,
        off: Math.random() * Math.PI * 2,
      })),
    []
  );

  useFrame((s) => {
    if (reduced || !ref.current) return;
    const t = s.clock.elapsedTime;
    ref.current.children.forEach((m, i) => {
      const p = petals[i];
      m.position.x = p.x + Math.sin(t * p.spd + p.off) * 0.8;
      m.position.y = p.y + Math.sin(t * p.spd * 1.3 + p.off) * 0.4;
      m.rotation.z = t * p.spd + p.off;
    });
  });

  return (
    <group ref={ref}>
      {petals.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]} scale={p.s}>
          <circleGeometry args={[0.07, 6]} />
          <meshStandardMaterial color={i % 3 === 0 ? '#FF8A00' : i % 3 === 1 ? '#FFC93C' : '#E5407A'} side={2} />
        </mesh>
      ))}
    </group>
  );
}

/* The cast, arranged in a sunlit courtyard, with a gentle cursor parallax. */
function Courtyard({ reduced }) {
  const g = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (reduced || !g.current) return;
    const mx = typeof window !== 'undefined' ? (window.__pvcMouseX ?? 0) : 0;
    const my = typeof window !== 'undefined' ? (window.__pvcMouseY ?? 0) : 0;
    mouse.current.x += (mx - mouse.current.x) * 0.05;
    mouse.current.y += (my - mouse.current.y) * 0.05;
    g.current.rotation.y = mouse.current.x * 0.12;
    g.current.rotation.x = -mouse.current.y * 0.05;
  });

  const small = typeof window !== 'undefined' && window.innerWidth < 820;
  const groupScale = small ? 0.78 : 1;

  return (
    <group ref={g} scale={groupScale} position={[small ? 0 : 0.4, -1.4, 0]}>
      {/* Grass mound */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <circleGeometry args={[6.5, 48]} />
        <meshStandardMaterial color="#9FD06A" roughness={1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <ringGeometry args={[3.2, 6.4, 48]} />
        <meshStandardMaterial color="#8AC257" roughness={1} />
      </mesh>

      <ContactShadows position={[0, 0.02, 0]} opacity={0.28} scale={12} blur={2.4} far={4} color="#3a5a1e" />

      <Buffalo position={[-2.4, 0, -1.3]} rotation={[0, 0.6, 0]} scale={1.05} reduced={reduced} phase={1.5} />
      <Cow position={[1.5, 0, -0.6]} rotation={[0, -0.7, 0]} scale={1} reduced={reduced} phase={0} />
      <Dog position={[-0.7, 0, 1.3]} rotation={[0, 0.4, 0]} scale={0.95} reduced={reduced} phase={2.4} />
      <Cat position={[1.9, 0, 1.5]} rotation={[0, -0.5, 0]} scale={0.85} reduced={reduced} phase={3.1} />
      <Bird position={[-1.6, 2.3, 0.8]} rotation={[0, 0.5, 0]} scale={0.9} reduced={reduced} phase={0.8} />

      <Petals reduced={reduced} />
    </group>
  );
}

export default function Scene() {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Lightweight pointer tracking on the window (canvas stays click-through).
  if (typeof window !== 'undefined' && !window.__pvcMouseBound) {
    window.__pvcMouseBound = true;
    window.addEventListener('pointermove', (e) => {
      window.__pvcMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      window.__pvcMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  }

  return (
    <Canvas
      className="scene-canvas"
      dpr={[1, 1.8]}
      shadows
      camera={{ position: [0, 1.6, 7.5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => gl.setClearAlpha(0)}
    >
      <Suspense fallback={null}>
        <hemisphereLight args={['#CFefff', '#a9d97f', 1.1]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 8, 4]}
          intensity={2.4}
          color="#FFF3D6"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-far={20}
          shadow-camera-left={-8}
          shadow-camera-right={8}
          shadow-camera-top={8}
          shadow-camera-bottom={-8}
        />
        <directionalLight position={[-5, 3, -2]} intensity={0.6} color="#BFE6FF" />

        <Courtyard reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
