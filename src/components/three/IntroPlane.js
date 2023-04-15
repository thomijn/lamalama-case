import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

import { IntroPlaneMaterial } from "./IntroPlaneMaterial";

export default function IntroPlane() {
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
      <introPlaneMaterial ref={ref} key={IntroPlaneMaterial.key} />
    </mesh>
  );
}
