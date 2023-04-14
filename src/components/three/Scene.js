import { Canvas } from "@react-three/fiber";

import MouseFollow from "./MouseFollow";
import IntroPlane from "./IntroPlane";
import styled from "styled-components";

export default function Scene() {
  return (
    <Wrapper>
      <Canvas>
        <MouseFollow />
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
