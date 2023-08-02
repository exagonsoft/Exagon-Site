import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = (props) => {
  const {isMobile} = props
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor="black" />
      <directionalLight
        position={[-50, 100, 0]}
        intensity={10}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.60 : 0.75}
        position={isMobile ? [0, -3, 0] : [0, -2.9, -1.5]}
      />
      rotation={[-0.01, -0.2, -0.1]}
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const _media_query = window.matchMedia('(max-width: 500px)');

    setIsMobile(_media_query.matches);

    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    };

    _media_query.addEventListener("change", handleMediaChange);

    return () => {
      _media_query.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
