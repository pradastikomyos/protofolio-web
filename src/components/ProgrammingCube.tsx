import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

type TechItem = {
  label: string;
  texture: string;
  position: [number, number, number];
};

const techItems: TechItem[] = [
  { label: 'React', texture: '/react-logo.png', position: [0, 1.45, 0] },
  { label: 'TypeScript', texture: '/TypeScript.png', position: [1.8, 0.55, 0.7] },
  { label: 'PostgreSQL', texture: '/supabase-logo.png', position: [1.45, -0.95, -0.65] },
  { label: 'HTML/CSS', texture: '/html-logo.png', position: [-1.45, -0.95, 0.65] },
  { label: 'Python', texture: '/python-logo.png', position: [-1.8, 0.55, -0.7] },
  { label: 'Java', texture: '/java-logo.png', position: [0, -1.55, 0] },
];

const TechBadge = ({
  label,
  texture,
  position,
  onHoverChange,
}: {
  label: string;
  texture: THREE.Texture;
  position: [number, number, number];
  onHoverChange: (hovered: boolean) => void;
}) => {
  const spriteRef = useRef<THREE.Sprite>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!spriteRef.current) return;

    const targetScale = hovered ? 0.86 : 0.68;
    const nextScale = THREE.MathUtils.damp(spriteRef.current.scale.x, targetScale, 9, delta);
    spriteRef.current.scale.setScalar(nextScale);
  });

  const setBadgeHover = (nextHovered: boolean) => {
    setHovered(nextHovered);
    onHoverChange(nextHovered);
  };

  return (
    <sprite
      ref={spriteRef}
      position={position}
      onPointerOver={(event) => {
        event.stopPropagation();
        setBadgeHover(true);
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        setBadgeHover(false);
      }}
      userData={{ label }}
    >
      <spriteMaterial
        map={texture}
        transparent
        alphaTest={0.08}
        opacity={hovered ? 1 : 0.94}
        depthWrite={false}
      />
    </sprite>
  );
};

const TechOrbit = () => {
  const orbitRef = useRef<THREE.Group>(null);
  const [hoveredBadge, setHoveredBadge] = useState(false);
  const textures = useTexture(techItems.map((item) => item.texture));

  useEffect(() => {
    textures.forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 8;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.needsUpdate = true;
    });
  }, [textures]);

  useFrame((state, delta) => {
    if (!orbitRef.current) return;

    const speed = hoveredBadge ? 0.08 : 0.28;
    orbitRef.current.rotation.y += delta * speed;
    orbitRef.current.rotation.x = THREE.MathUtils.damp(
      orbitRef.current.rotation.x,
      Math.sin(state.clock.elapsedTime * 0.45) * 0.08,
      4,
      delta
    );
  });

  return (
    <group ref={orbitRef}>
      <mesh>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshStandardMaterial color="#2563eb" roughness={0.32} metalness={0.18} />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[0.78, 1]} />
        <meshBasicMaterial color="#93c5fd" wireframe transparent opacity={0.34} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.08, 0.008, 8, 120]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.28} />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2.08, 0.008, 8, 120]} />
        <meshBasicMaterial color="#facc15" transparent opacity={0.2} />
      </mesh>

      {techItems.map((item, index) => (
        <TechBadge
          key={item.label}
          label={item.label}
          texture={textures[index]}
          position={item.position}
          onHoverChange={setHoveredBadge}
        />
      ))}
    </group>
  );
};

const LoadingOrbit = () => (
  <group>
    <mesh>
      <icosahedronGeometry args={[0.72, 1]} />
      <meshStandardMaterial color="#2563eb" roughness={0.4} />
    </mesh>
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[2.08, 0.008, 8, 96]} />
      <meshBasicMaterial color="#60a5fa" transparent opacity={0.28} />
    </mesh>
  </group>
);

export const ProgrammingCube = () => {
  return (
    <div className="w-full h-72 md:h-96 portfolio-fade-in">
      <Canvas
        camera={{ position: [0, 0.25, 5.8], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[4, 5, 5]} intensity={1.6} />
        <pointLight position={[-3, -2, 4]} intensity={0.8} color="#facc15" />

        <Suspense fallback={<LoadingOrbit />}>
          <TechOrbit />
        </Suspense>
      </Canvas>

      <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
        {techItems.map((item) => (
          <span key={item.label} className="rounded-full border border-border/50 bg-background/40 px-3 py-1">
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};
