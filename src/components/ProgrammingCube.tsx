import { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Environment } from '@react-three/drei';
import * as THREE from 'three';

const RotatingCube = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const { pointer } = useThree();

  // Store the rotation when hover starts
  const frozenRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (groupRef.current) {
      if (hovered) {
        // STOP rotation and gently follow cursor
        const targetX = frozenRotation.current.x + pointer.y * 0.15;
        const targetY = frozenRotation.current.y + pointer.x * 0.15;

        // Smooth interpolation to cursor position
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, delta * 3);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, delta * 3);

        // Gentle scale up
        const targetScale = 1.05;
        const currentScale = groupRef.current.scale.x;
        const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta * 4);
        groupRef.current.scale.setScalar(newScale);
      } else {
        // Normal spinning rotation
        groupRef.current.rotation.x = state.clock.elapsedTime * 0.204;
        groupRef.current.rotation.y = state.clock.elapsedTime * 0.306;

        // Store current rotation for when hover starts
        frozenRotation.current.x = groupRef.current.rotation.x;
        frozenRotation.current.y = groupRef.current.rotation.y;

        // Normal scale
        const targetScale = 1.0;
        const currentScale = groupRef.current.scale.x;
        const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta * 4);
        groupRef.current.scale.setScalar(newScale);
      }
    }
  });

  // Load different textures for each face - AI/ML focused tech stack
  const textures = useTexture([
    '/react-logo.png',        // Front - React for frontend
    '/IBM-logo.png',          // Back - IBM (your internship/certification focus)
    '/python.png',            // Top - Python for data science
    '/TensorFlow.png',        // Bottom - TensorFlow for ML
    '/Keras.png',             // Right - Keras for deep learning
    '/java-logo.png'          // Left - Java for backend
  ]);

  const logoPositions: [number, number, number][] = [
    [0, 0, 1.3],   // Front
    [0, 0, -1.3],  // Back
    [0, 1.3, 0],   // Top
    [0, -1.3, 0],  // Bottom
    [1.3, 0, 0],   // Right
    [-1.3, 0, 0]   // Left
  ];

  const logoRotations: [number, number, number][] = [
    [0, 0, 0],                      // Front
    [0, Math.PI, 0],                // Back
    [-Math.PI / 2, 0, 0],           // Top
    [Math.PI / 2, 0, 0],            // Bottom
    [0, Math.PI / 2, 0],            // Right
    [0, -Math.PI / 2, 0]            // Left
  ];

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Frosted glass cube */}
      <mesh>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.9}
          transmission={1}
          thickness={1}
          transparent
          opacity={0.6}
          envMapIntensity={1}
        />
      </mesh>

      {/* BOLD white edge lines */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2.5, 2.5, 2.5)]} />
        <lineBasicMaterial
          color="#ffffff"
          transparent={false}
          linewidth={12}
          toneMapped={false}
        />
      </lineSegments>

      {/* Logo planes positioned outside the cube */}
      {textures.map((texture, index) => (
        <mesh key={index} position={logoPositions[index]} rotation={logoRotations[index]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshStandardMaterial
            map={texture}
            transparent={true}
            alphaTest={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};

export const ProgrammingCube = () => {
  return (
    <div className="w-full h-64 md:h-80 portfolio-fade-in">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Environment for realistic reflections */}
        <Environment preset="studio" />

        {/* Enhanced lighting setup */}
        <ambientLight intensity={0.4} />

        {/* Key light from top-right */}
        <directionalLight
          position={[5, 8, 3]}
          intensity={2.0}
          color="#ffffff"
          castShadow
        />

        {/* Fill light from left */}
        <directionalLight
          position={[-3, 2, 4]}
          intensity={0.8}
          color="#e6f3ff"
        />

        {/* Rim light for glass edges */}
        <pointLight
          position={[0, 0, 8]}
          intensity={1.2}
          color="#ffffff"
        />

        {/* Accent light for depth */}
        <pointLight
          position={[-5, -3, -2]}
          intensity={0.5}
          color="#64ffda"
        />

        <Suspense fallback={
          <mesh>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial color="#666666" />
          </mesh>
        }>
          <RotatingCube />
        </Suspense>
      </Canvas>
    </div>
  );
};