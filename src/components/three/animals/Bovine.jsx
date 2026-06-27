import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

/* A cylindrical leg. */
function Leg({ position, color, h = 0.5, r = 0.1 }) {
  return (
    <mesh position={position} castShadow>
      <cylinderGeometry args={[r, r * 0.82, h, 14]} />
      <meshStandardMaterial color={color} roughness={0.85} />
    </mesh>
  );
}

/**
 * Stylised low-poly bovine — drives both the Cow and the Buffalo via colour
 * props. Built from rounded primitives with a gentle idle bob, head nod,
 * ear-twitch and tail-swing.
 */
export function Bovine({
  bodyColor = '#FBF5EA',
  patchColor = '#6B4A2B',
  hornColor = '#ECDAB6',
  snoutColor = '#F3B6BF',
  hoofColor = '#3C2E20',
  hornScale = 1,
  hasSpots = true,
  hasBell = true,
  reduced = false,
  phase = 0,
  ...props
}) {
  const g = useRef();
  const head = useRef();
  const tail = useRef();
  const earL = useRef();
  const earR = useRef();

  useFrame((s) => {
    if (reduced || !g.current) return;
    const t = s.clock.elapsedTime + phase;
    g.current.position.y = (props.position?.[1] ?? 0) + Math.sin(t * 1.2) * 0.04;
    if (head.current) head.current.rotation.x = Math.sin(t * 0.9) * 0.07 - 0.04;
    if (tail.current) tail.current.rotation.z = Math.sin(t * 2.3) * 0.45;
    const tw = Math.sin(t * 3) * 0.16;
    if (earL.current) earL.current.rotation.z = 0.6 + tw;
    if (earR.current) earR.current.rotation.z = -0.6 - tw;
  });

  return (
    <group ref={g} {...props} dispose={null}>
      {/* Legs */}
      <Leg position={[0.62, 0.25, 0.3]} color={bodyColor} />
      <Leg position={[0.62, 0.25, -0.3]} color={bodyColor} />
      <Leg position={[-0.55, 0.25, 0.3]} color={bodyColor} />
      <Leg position={[-0.55, 0.25, -0.3]} color={bodyColor} />
      {/* Hooves */}
      {[[0.62, 0.3], [0.62, -0.3], [-0.55, 0.3], [-0.55, -0.3]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.04, z]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 0.1, 14]} />
          <meshStandardMaterial color={hoofColor} roughness={0.7} />
        </mesh>
      ))}

      {/* Body */}
      <mesh position={[0, 0.92, 0]} scale={[1.45, 1.02, 1.02]} castShadow>
        <sphereGeometry args={[0.62, 32, 24]} />
        <meshStandardMaterial color={bodyColor} roughness={0.78} />
      </mesh>

      {/* Spots */}
      {hasSpots && (
        <>
          <mesh position={[-0.35, 1.15, 0.5]} scale={[1, 1, 0.4]}>
            <sphereGeometry args={[0.26, 18, 14]} />
            <meshStandardMaterial color={patchColor} roughness={0.8} />
          </mesh>
          <mesh position={[0.3, 0.75, 0.52]} scale={[1, 1, 0.4]}>
            <sphereGeometry args={[0.2, 16, 12]} />
            <meshStandardMaterial color={patchColor} roughness={0.8} />
          </mesh>
          <mesh position={[0.1, 1.1, -0.55]} scale={[1, 1, 0.4]}>
            <sphereGeometry args={[0.22, 16, 12]} />
            <meshStandardMaterial color={patchColor} roughness={0.8} />
          </mesh>
        </>
      )}

      {/* Bell */}
      {hasBell && (
        <group position={[0.78, 0.62, 0]}>
          <mesh position={[0, 0.12, 0]}>
            <torusGeometry args={[0.16, 0.025, 8, 20]} />
            <meshStandardMaterial color="#C0392B" roughness={0.6} />
          </mesh>
          <mesh position={[0, -0.02, 0]} castShadow>
            <sphereGeometry args={[0.1, 16, 12]} />
            <meshStandardMaterial color="#FFC93C" metalness={0.5} roughness={0.35} />
          </mesh>
        </group>
      )}

      {/* Head */}
      <group ref={head} position={[0.92, 1.08, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.4, 28, 22]} />
          <meshStandardMaterial color={bodyColor} roughness={0.78} />
        </mesh>
        {/* Snout */}
        <mesh position={[0.34, -0.12, 0]} scale={[1, 0.8, 1.1]}>
          <sphereGeometry args={[0.24, 22, 18]} />
          <meshStandardMaterial color={snoutColor} roughness={0.7} />
        </mesh>
        {/* Nostrils */}
        <mesh position={[0.52, -0.1, 0.1]}><sphereGeometry args={[0.035, 10, 8]} /><meshStandardMaterial color="#5a3540" /></mesh>
        <mesh position={[0.52, -0.1, -0.1]}><sphereGeometry args={[0.035, 10, 8]} /><meshStandardMaterial color="#5a3540" /></mesh>
        {/* Eyes */}
        <mesh position={[0.26, 0.12, 0.22]}><sphereGeometry args={[0.06, 14, 12]} /><meshStandardMaterial color="#2b2118" /></mesh>
        <mesh position={[0.26, 0.12, -0.22]}><sphereGeometry args={[0.06, 14, 12]} /><meshStandardMaterial color="#2b2118" /></mesh>
        {/* Ears */}
        <mesh ref={earL} position={[-0.05, 0.18, 0.36]} rotation={[0, 0, 0.6]} scale={[0.5, 1, 0.22]}>
          <sphereGeometry args={[0.18, 14, 10]} /><meshStandardMaterial color={bodyColor} roughness={0.8} />
        </mesh>
        <mesh ref={earR} position={[-0.05, 0.18, -0.36]} rotation={[0, 0, -0.6]} scale={[0.5, 1, 0.22]}>
          <sphereGeometry args={[0.18, 14, 10]} /><meshStandardMaterial color={bodyColor} roughness={0.8} />
        </mesh>
        {/* Horns */}
        <mesh position={[0.02, 0.4, 0.18]} rotation={[0.3, 0, 0.4]} scale={hornScale} castShadow>
          <coneGeometry args={[0.07, 0.32, 12]} /><meshStandardMaterial color={hornColor} roughness={0.5} />
        </mesh>
        <mesh position={[0.02, 0.4, -0.18]} rotation={[-0.3, 0, 0.4]} scale={hornScale} castShadow>
          <coneGeometry args={[0.07, 0.32, 12]} /><meshStandardMaterial color={hornColor} roughness={0.5} />
        </mesh>
      </group>

      {/* Tail */}
      <group ref={tail} position={[-0.78, 1.05, 0]}>
        <mesh position={[-0.05, -0.3, 0]} rotation={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.04, 0.03, 0.7, 8]} />
          <meshStandardMaterial color={bodyColor} roughness={0.8} />
        </mesh>
        <mesh position={[-0.12, -0.66, 0]}>
          <sphereGeometry args={[0.09, 12, 10]} />
          <meshStandardMaterial color={patchColor} roughness={0.8} />
        </mesh>
      </group>
    </group>
  );
}

export const Cow = (props) => <Bovine {...props} />;

export const Buffalo = (props) => (
  <Bovine
    bodyColor="#5E6470"
    patchColor="#474D57"
    hornColor="#33373F"
    snoutColor="#7A8290"
    hoofColor="#2A2D33"
    hornScale={1.5}
    hasSpots={false}
    hasBell={false}
    {...props}
  />
);
