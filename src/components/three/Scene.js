import { Canvas } from "@react-three/fiber";

import HeroPlane from "./HeroPlane";
import IntroPlane from "./IntroPlane";
import styled from "styled-components";

export default function Scene() {
  return (
    <Wrapper>
      <Canvas>
        <HeroPlane />
        <IntroPlane />
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top:0px
  z-index: -1;
`;
