import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

import { HeroPlaneMaterial } from "./HeroPlaneMaterial";
import { COLORS } from "@/constants";

let previousPosition = new THREE.Vector3();
const HeroPlane = () => {
  const ref = useRef();
  const mesh = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { width, height } = useThree((state) => state.viewport);

  useFrame((state, delta) => {
    ref.current.time += delta;
    ref.current.color = new THREE.Color(COLORS.background);
    ref.current.linewidth = 0.99;
    ref.current.speed = 0.1;

    mesh.current.position.lerp(
      new THREE.Vector3(mouse.x * width * 0.1 + 3.5, mouse.y * height * 0.1, 0),
      0.01
    );

    let distanceX =
      Math.abs(mesh.current.position.x).toFixed(4) -
      Math.abs(previousPosition.x).toFixed(4);

    let distanceY =
      Math.abs(mesh.current.position.y).toFixed(4) -
      Math.abs(previousPosition.y).toFixed(4);

    mesh.current.scale.lerp(
      new THREE.Vector3(
        1 + Math.abs(distanceX) * 5,
        1 + Math.abs(distanceY) * 5,
        1
      ),
      0.05
    );

    previousPosition = mesh.current.position.clone();
  });

  const handleMouseMove = (evt) => {
    const _canvas = document.querySelector("canvas");

    var rect = _canvas.getBoundingClientRect();

    setMouse({
      x: (evt.clientX / rect.width) * 2 - 1,
      y: -(evt.clientY / rect.height) * 2 + 1,
    });
  };

  useEffect(() => {
    gsap.to(ref.current, {
      value: 1,
      duration: 1,
      delay: 2,
      ease: "power4.inOut",
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <mesh ref={mesh}>
      <planeBufferGeometry args={[8, 8]} />
      <heroPlaneMaterial
        transparent
        ref={ref}
        key={HeroPlaneMaterial.key}
      />
    </mesh>
  );
};

export default HeroPlane;
