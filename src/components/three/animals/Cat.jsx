import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * Stylised low-poly cat (orange tabby). Sits upright with a swaying tail,
 * triangular ears and whiskers.
 */
export default function Cat({ bodyColor = '#E8923C', stripeColor = '#C66A1E', reduced = false, phase = 0, ...props }) {
  const g = useRef();
  const tail = useRef();
  const head = useRef();

  useFrame((s) => {
    if (reduced || !g.current) return;
    const t = s.clock.elapsedTime + phase;
    g.current.position.y = (props.position?.[1] ?? 0) + Math.sin(t * 1.6) * 0.025;
    if (tail.current) tail.current.rotation.x = Math.sin(t * 1.8) * 0.5;
    if (head.current) head.current.rotation.y = Math.sin(t * 0.7) * 0.25;
  });

  return (
    <group ref={g} {...props} dispose={null}>
      {/* Paws */}
      <mesh position={[0.2, 0.06, 0.12]}><sphereGeometry args={[0.08, 12, 10]} /><meshStandardMaterial color="#F4D9B6" roughness={0.85} /></mesh>
      <mesh position={[0.2, 0.06, -0.12]}><sphereGeometry args={[0.08, 12, 10]} /><meshStandardMaterial color="#F4D9B6" roughness={0.85} /></mesh>

      {/* Body (sitting) */}
      <mesh position={[0, 0.38, 0]} scale={[0.85, 1.15, 0.85]} castShadow>
        <sphereGeometry args={[0.32, 26, 20]} />
        <meshStandardMaterial color={bodyColor} roughness={0.82} />
      </mesh>
      {/* Stripes */}
      {[0.3, 0.45, 0.6].map((y, i) => (
        <mesh key={i} position={[-0.22, y, 0]} rotation={[0, 0, 0.2]} scale={[0.5, 0.16, 0.9]}>
          <sphereGeometry args={[0.28, 14, 10]} /><meshStandardMaterial color={stripeColor} roughness={0.82} />
        </mesh>
      ))}

      {/* Head */}
      <group ref={head} position={[0.05, 0.78, 0]}>
        <mesh castShadow><sphereGeometry args={[0.27, 26, 20]} /><meshStandardMaterial color={bodyColor} roughness={0.82} /></mesh>
        {/* Ears */}
        <mesh position={[-0.02, 0.24, 0.14]} rotation={[0.2, 0, -0.1]}><coneGeometry args={[0.1, 0.2, 4]} /><meshStandardMaterial color={bodyColor} roughness={0.82} /></mesh>
        <mesh position={[-0.02, 0.24, -0.14]} rotation={[-0.2, 0, -0.1]}><coneGeometry args={[0.1, 0.2, 4]} /><meshStandardMaterial color={bodyColor} roughness={0.82} /></mesh>
        {/* Muzzle */}
        <mesh position={[0.22, -0.04, 0]} scale={[0.8, 0.7, 1]}><sphereGeometry args={[0.14, 18, 14]} /><meshStandardMaterial color="#F4D9B6" roughness={0.85} /></mesh>
        {/* Nose */}
        <mesh position={[0.34, 0.0, 0]}><sphereGeometry args={[0.035, 12, 10]} /><meshStandardMaterial color="#E8607A" /></mesh>
        {/* Eyes */}
        <mesh position={[0.18, 0.08, 0.12]}><sphereGeometry args={[0.05, 14, 12]} /><meshStandardMaterial color="#2f6b3a" emissive="#2f6b3a" emissiveIntensity={0.15} /></mesh>
        <mesh position={[0.18, 0.08, -0.12]}><sphereGeometry args={[0.05, 14, 12]} /><meshStandardMaterial color="#2f6b3a" emissive="#2f6b3a" emissiveIntensity={0.15} /></mesh>
        {/* Whiskers */}
        {[-0.05, 0.05].map((zoff, i) => (
          <mesh key={i} position={[0.3, -0.02, 0.16 + zoff]} rotation={[0, 0.4, 0]}>
            <cylinderGeometry args={[0.004, 0.004, 0.3, 4]} /><meshStandardMaterial color="#fff8ec" />
          </mesh>
        ))}
        {[-0.05, 0.05].map((zoff, i) => (
          <mesh key={`r${i}`} position={[0.3, -0.02, -0.16 + zoff]} rotation={[0, -0.4, 0]}>
            <cylinderGeometry args={[0.004, 0.004, 0.3, 4]} /><meshStandardMaterial color="#fff8ec" />
          </mesh>
        ))}
      </group>

      {/* Tail */}
      <group ref={tail} position={[-0.28, 0.2, 0]}>
        <mesh position={[-0.05, 0.28, 0]} rotation={[0, 0, 0.3]}><cylinderGeometry args={[0.045, 0.06, 0.6, 10]} /><meshStandardMaterial color={bodyColor} roughness={0.82} /></mesh>
        <mesh position={[-0.02, 0.56, 0]}><sphereGeometry args={[0.06, 12, 10]} /><meshStandardMaterial color={stripeColor} roughness={0.82} /></mesh>
      </group>
    </group>
  );
}
