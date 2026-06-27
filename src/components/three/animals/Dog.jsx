import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * Stylised low-poly desi dog (tan). Sits cheerfully with a fast wagging
 * tail, a lolling tongue and floppy ears that bounce.
 */
export default function Dog({ bodyColor = '#D89A52', earColor = '#B97A38', reduced = false, phase = 0, ...props }) {
  const g = useRef();
  const tail = useRef();
  const head = useRef();
  const earL = useRef();
  const earR = useRef();

  useFrame((s) => {
    if (reduced || !g.current) return;
    const t = s.clock.elapsedTime + phase;
    g.current.position.y = (props.position?.[1] ?? 0) + Math.sin(t * 2) * 0.03;
    if (tail.current) tail.current.rotation.z = Math.sin(t * 9) * 0.6 + 0.5; // fast wag
    if (head.current) head.current.rotation.z = Math.sin(t * 1.4) * 0.06;
    const tw = Math.sin(t * 4) * 0.2;
    if (earL.current) earL.current.rotation.x = 0.3 + tw;
    if (earR.current) earR.current.rotation.x = -0.3 - tw;
  });

  return (
    <group ref={g} {...props} dispose={null}>
      {/* Hind legs (sitting) */}
      <mesh position={[-0.28, 0.18, 0.22]} castShadow><sphereGeometry args={[0.18, 16, 12]} /><meshStandardMaterial color={bodyColor} roughness={0.8} /></mesh>
      <mesh position={[-0.28, 0.18, -0.22]} castShadow><sphereGeometry args={[0.18, 16, 12]} /><meshStandardMaterial color={bodyColor} roughness={0.8} /></mesh>
      {/* Front legs */}
      <mesh position={[0.25, 0.16, 0.16]} castShadow><cylinderGeometry args={[0.09, 0.09, 0.34, 12]} /><meshStandardMaterial color={bodyColor} roughness={0.8} /></mesh>
      <mesh position={[0.25, 0.16, -0.16]} castShadow><cylinderGeometry args={[0.09, 0.09, 0.34, 12]} /><meshStandardMaterial color={bodyColor} roughness={0.8} /></mesh>
      <mesh position={[0.29, 0.02, 0.16]}><sphereGeometry args={[0.1, 12, 10]} /><meshStandardMaterial color="#f0e2cc" roughness={0.8} /></mesh>
      <mesh position={[0.29, 0.02, -0.16]}><sphereGeometry args={[0.1, 12, 10]} /><meshStandardMaterial color="#f0e2cc" roughness={0.8} /></mesh>

      {/* Body (upright, sitting) */}
      <mesh position={[0, 0.5, 0]} scale={[0.95, 1.15, 0.95]} castShadow>
        <sphereGeometry args={[0.42, 28, 22]} />
        <meshStandardMaterial color={bodyColor} roughness={0.8} />
      </mesh>
      {/* Belly */}
      <mesh position={[0.18, 0.42, 0]} scale={[0.7, 0.9, 0.8]}>
        <sphereGeometry args={[0.32, 22, 18]} />
        <meshStandardMaterial color="#F0DFC4" roughness={0.85} />
      </mesh>

      {/* Head */}
      <group ref={head} position={[0.12, 0.96, 0]}>
        <mesh castShadow><sphereGeometry args={[0.34, 28, 22]} /><meshStandardMaterial color={bodyColor} roughness={0.8} /></mesh>
        {/* Muzzle */}
        <mesh position={[0.28, -0.06, 0]} scale={[1.1, 0.75, 0.9]}><sphereGeometry args={[0.18, 20, 16]} /><meshStandardMaterial color="#F0DFC4" roughness={0.85} /></mesh>
        {/* Nose */}
        <mesh position={[0.45, 0.0, 0]}><sphereGeometry args={[0.06, 14, 12]} /><meshStandardMaterial color="#3a2b22" roughness={0.5} /></mesh>
        {/* Tongue */}
        <mesh position={[0.4, -0.16, 0]} rotation={[0, 0, -0.3]} scale={[0.6, 1, 0.5]}><sphereGeometry args={[0.1, 12, 10]} /><meshStandardMaterial color="#E8607A" roughness={0.7} /></mesh>
        {/* Eyes */}
        <mesh position={[0.22, 0.12, 0.15]}><sphereGeometry args={[0.055, 14, 12]} /><meshStandardMaterial color="#2b2118" /></mesh>
        <mesh position={[0.22, 0.12, -0.15]}><sphereGeometry args={[0.055, 14, 12]} /><meshStandardMaterial color="#2b2118" /></mesh>
        {/* Floppy ears */}
        <mesh ref={earL} position={[-0.04, 0.16, 0.28]} rotation={[0.3, 0, 0.2]} scale={[0.5, 1.2, 0.25]}><sphereGeometry args={[0.18, 14, 12]} /><meshStandardMaterial color={earColor} roughness={0.8} /></mesh>
        <mesh ref={earR} position={[-0.04, 0.16, -0.28]} rotation={[-0.3, 0, 0.2]} scale={[0.5, 1.2, 0.25]}><sphereGeometry args={[0.18, 14, 12]} /><meshStandardMaterial color={earColor} roughness={0.8} /></mesh>
      </group>

      {/* Tail */}
      <group ref={tail} position={[-0.34, 0.55, 0]}>
        <mesh position={[-0.1, 0.18, 0]} rotation={[0, 0, 0.8]}><cylinderGeometry args={[0.05, 0.08, 0.5, 10]} /><meshStandardMaterial color={bodyColor} roughness={0.8} /></mesh>
      </group>
    </group>
  );
}
