import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

import { WaveMaterial } from "./WaveMaterial";
import MouseFollow from "./MouseFollow";

function ShaderPlane() {
  const ref = useRef();
  const { width, height } = useThree((state) => state.viewport);

  useFrame((state, delta) => {
    ref.current.time += delta;
  });

  useEffect(() => {
    gsap.to(ref.current, {
      value: -1,
      duration: 1,
      delay: 1,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry />
      <waveMaterial ref={ref} key={WaveMaterial.key} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        zIndex: -1,
      }}
    >
      <Canvas>
        <MouseFollow />
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
