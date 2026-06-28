import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer, ContactShadows } from '@react-three/drei';
import { EffectComposer, DepthOfField, Bloom, Vignette, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Cow, Buffalo } from './animals/Bovine';
import Dog from './animals/Dog';
import Cat from './animals/Cat';
import Bird from './animals/Bird';

/* Warm "sun" disc behind the scene — Bloom turns it into a soft glow. */
function Sun() {
  return (
    <mesh position={[3.6, 3.2, -4]}>
      <circleGeometry args={[1.5, 48]} />
      <meshBasicMaterial color="#FFDD93" toneMapped={false} />
    </mesh>
  );
}

/* The cast in a sunlit Mithila courtyard, with a slow cinematic drift. */
function Courtyard({ reduced }) {
  const g = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const { camera } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const mx = typeof window !== 'undefined' ? (window.__pvcMouseX ?? 0) : 0;
    const my = typeof window !== 'undefined' ? (window.__pvcMouseY ?? 0) : 0;
    mouse.current.x += (mx - mouse.current.x) * 0.04;
    mouse.current.y += (my - mouse.current.y) * 0.04;

    if (g.current && !reduced) {
      g.current.rotation.y = Math.sin(t * 0.12) * 0.14 + mouse.current.x * 0.12;
      g.current.rotation.x = -mouse.current.y * 0.04;
    }
    // Slow cinematic camera breathing
    if (!reduced) {
      camera.position.x += ((mouse.current.x * 0.5) - camera.position.x) * 0.03;
      camera.position.y += ((1.25 + my * 0.2 + Math.sin(t * 0.3) * 0.06) - camera.position.y) * 0.03;
      camera.lookAt(0, 0.75, 0);
    }
  });

  const small = typeof window !== 'undefined' && window.innerWidth < 820;

  return (
    <group ref={g} scale={small ? 0.82 : 1} position={[small ? 0 : 0.35, -1.35, 0]}>
      {/* Earthy ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <circleGeometry args={[7, 64]} />
        <meshStandardMaterial color="#C9B27E" roughness={1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <ringGeometry args={[3.4, 6.9, 64]} />
        <meshStandardMaterial color="#B79B62" roughness={1} />
      </mesh>

      <ContactShadows position={[0, 0.015, 0]} opacity={0.4} scale={13} blur={2.6} far={4.5} color="#3a2a12" />

      {/* Hero focal animal (front, sharp), others softer behind via DOF */}
      <Cow position={[0.6, 0, 1.1]} rotation={[0, -0.5, 0]} scale={1.04} reduced={reduced} phase={0} />
      <Buffalo position={[-2.5, 0, -1.4]} rotation={[0, 0.6, 0]} scale={1.05} reduced={reduced} phase={1.5} />
      <Dog position={[-0.9, 0, 0.4]} rotation={[0, 0.5, 0]} scale={0.92} reduced={reduced} phase={2.4} />
      <Cat position={[2.1, 0, 0.7]} rotation={[0, -0.6, 0]} scale={0.82} reduced={reduced} phase={3.1} />
      <Bird position={[-1.7, 2.2, 0.6]} rotation={[0, 0.5, 0]} scale={0.9} reduced={reduced} phase={0.8} />

      <Sun />
    </group>
  );
}

export default function Scene() {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      dpr={[1, 1.5]}
      shadows
      camera={{ position: [0, 1.25, 7], fov: 40 }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => gl.setClearColor('#F3E9D2', 1)}
    >
      <Suspense fallback={null}>
        {/* Warm cinematic key + cool fill + rim */}
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[5, 7, 4]} intensity={2.6} color="#FFE6B8"
          castShadow shadow-mapSize={[1024, 1024]}
          shadow-camera-far={20} shadow-camera-left={-8} shadow-camera-right={8}
          shadow-camera-top={8} shadow-camera-bottom={-8}
        />
        <directionalLight position={[-5, 3, 1]} intensity={0.7} color="#BFE0E8" />
        <directionalLight position={[0, 4, -6]} intensity={1.1} color="#FFD68A" />

        <Environment resolution={128} frames={1}>
          <Lightformer form="rect" intensity={2} position={[3, 4, 2]} scale={[8, 6, 1]} color="#fff3d6" />
          <Lightformer form="rect" intensity={1} position={[-4, 1, 2]} scale={[6, 8, 1]} color="#e9f3f6" />
          <Lightformer form="ring" intensity={1.4} position={[3.6, 3.2, -3]} scale={3} color="#ffcf85" />
        </Environment>

        <Courtyard reduced={reduced} />

        <EffectComposer enableNormalPass={false}>
          <DepthOfField focusDistance={0.012} focalLength={0.03} bokehScale={4} height={480} />
          <Bloom intensity={0.7} luminanceThreshold={0.62} luminanceSmoothing={0.3} mipmapBlur />
          <Vignette eskil={false} offset={0.22} darkness={0.62} />
          <Noise opacity={0.04} premultiply blendFunction={BlendFunction.OVERLAY} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
