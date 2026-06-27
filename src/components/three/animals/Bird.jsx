import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * Stylised low-poly songbird. Hovers with a soft bob and fluttering wings —
 * a cheerful pop of colour above the courtyard.
 */
export default function Bird({ bodyColor = '#3FA7FF', wingColor = '#1F7FD6', bellyColor = '#FFE08A', reduced = false, phase = 0, ...props }) {
  const g = useRef();
  const wingL = useRef();
  const wingR = useRef();
  const head = useRef();

  useFrame((s) => {
    if (reduced || !g.current) return;
    const t = s.clock.elapsedTime + phase;
    g.current.position.y = (props.position?.[1] ?? 0) + Math.sin(t * 1.8) * 0.12;
    const flap = Math.sin(t * 7) * 0.7;
    if (wingL.current) wingL.current.rotation.x = -0.3 - flap;
    if (wingR.current) wingR.current.rotation.x = 0.3 + flap;
    if (head.current) head.current.rotation.y = Math.sin(t * 1.1) * 0.3;
  });

  return (
    <group ref={g} {...props} dispose={null}>
      {/* Body */}
      <mesh castShadow scale={[1.1, 1, 1]}>
        <sphereGeometry args={[0.26, 24, 18]} />
        <meshStandardMaterial color={bodyColor} roughness={0.6} />
      </mesh>
      {/* Belly */}
      <mesh position={[0.12, -0.06, 0]} scale={[0.7, 0.8, 0.85]}>
        <sphereGeometry args={[0.22, 20, 16]} />
        <meshStandardMaterial color={bellyColor} roughness={0.65} />
      </mesh>

      {/* Head */}
      <group ref={head} position={[0.24, 0.18, 0]}>
        <mesh castShadow><sphereGeometry args={[0.17, 22, 18]} /><meshStandardMaterial color={bodyColor} roughness={0.6} /></mesh>
        {/* Beak */}
        <mesh position={[0.18, -0.02, 0]} rotation={[0, 0, -1.6]}><coneGeometry args={[0.06, 0.18, 10]} /><meshStandardMaterial color="#FF8A00" roughness={0.5} /></mesh>
        {/* Eyes */}
        <mesh position={[0.1, 0.06, 0.1]}><sphereGeometry args={[0.035, 12, 10]} /><meshStandardMaterial color="#2b2118" /></mesh>
        <mesh position={[0.1, 0.06, -0.1]}><sphereGeometry args={[0.035, 12, 10]} /><meshStandardMaterial color="#2b2118" /></mesh>
        {/* Crest */}
        <mesh position={[-0.02, 0.16, 0]} rotation={[0, 0, 0.4]}><coneGeometry args={[0.04, 0.16, 8]} /><meshStandardMaterial color="#E5407A" roughness={0.6} /></mesh>
      </group>

      {/* Wings */}
      <mesh ref={wingL} position={[-0.02, 0.02, 0.22]} rotation={[-0.3, 0, 0]} scale={[1, 0.3, 1.4]}>
        <sphereGeometry args={[0.2, 14, 10]} /><meshStandardMaterial color={wingColor} roughness={0.6} />
      </mesh>
      <mesh ref={wingR} position={[-0.02, 0.02, -0.22]} rotation={[0.3, 0, 0]} scale={[1, 0.3, 1.4]}>
        <sphereGeometry args={[0.2, 14, 10]} /><meshStandardMaterial color={wingColor} roughness={0.6} />
      </mesh>

      {/* Tail */}
      <mesh position={[-0.28, 0.0, 0]} rotation={[0, 0, 0.2]} scale={[1.6, 0.25, 0.7]}>
        <sphereGeometry args={[0.14, 12, 10]} /><meshStandardMaterial color={wingColor} roughness={0.6} />
      </mesh>
    </group>
  );
}
