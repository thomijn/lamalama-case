import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import { MouseFollowMaterial } from "./MouseFollowMaterial";

let previousPosition = new THREE.Vector3();
const MouseFollow = () => {
  const ref = useRef();
  const mesh = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { width, height } = useThree((state) => state.viewport);
  const [hoveredOverContent, setHoveredOverContent] = useState(false);

  useFrame((state, delta) => {
    ref.current.time += delta;

    mesh.current.position.lerp(
      new THREE.Vector3(mouse.x * width * 0.5, mouse.y * height * 0.5, 0),
      0.05
    );

    let distanceX =
      Math.abs(mesh.current.position.x).toFixed(4) -
      Math.abs(previousPosition.x).toFixed(4);

    let distanceY =
      Math.abs(mesh.current.position.y).toFixed(4) -
      Math.abs(previousPosition.y).toFixed(4);
    if (hoveredOverContent) {
      //lerp scale to 0
      mesh.current.scale.lerp(new THREE.Vector3(0, 0, 0), 0.08);
    } else {
      //lerp scale to 1
      mesh.current.scale.lerp(
        new THREE.Vector3(
          1 + Math.abs(distanceX) * 5,
          1 + Math.abs(distanceY) * 5,
          1
        ),
        0.05
      );
    }

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
    window.addEventListener("mousemove", handleMouseMove);

    // if mouse is over content, don't show mouse follow
    window.addEventListener("mousemove", (evt) => {
      //check if any parent of the element has the class content
      if (evt.target.classList.contains("content")) {
        setHoveredOverContent(false);
      } else {
        setHoveredOverContent(false);
      }
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <mesh ref={mesh}>
      <circleBufferGeometry args={[1.5, 32]} />
      <mouseFollowMaterial
        transparent
        ref={ref}
        key={MouseFollowMaterial.key}
      />
    </mesh>
  );
};

export default MouseFollow;
