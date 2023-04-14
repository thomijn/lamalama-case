import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

import Button from "./Button";

const Hero = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to(".hero-video", {
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "linear",
      })
      .to(
        ".hero-content",
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        ">+=.5"
      );
  }, []);

  return (
    <Wrapper>
      <video className="hero-video" autoPlay muted loop>
        <source src="/assets/video/video2.mp4" type="video/mp4" />
      </video>
      <div className="hero-content ">
        <h1 className="content">We enable companies to gift trees</h1>
        <p className="content">
          Join our movement and start giving the 100% sustainable corporate
          gift.
        </p>
        <Button color="var(--color-primary)" variant="outlined">
          Gift a tree
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    opacity: 0;
  }

  .hero-content {
    margin-top: 70px;
    height: 100%;
    max-width: 700px;
    padding-inline: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-lg);
    opacity: 0;

    h1 {
      font-weight: 400;
      font-size: 5.5rem;
      line-height: 5rem;
      letter-spacing: -0.03em;
      color: var(--color-primary);
    }

    p {
      transform: translateY(10px);
      line-height: 2rem;
      font-weight: 400;
      color: var(--color-white);
      font-size: 1.7rem;
    }
  }
`;

export default Hero;
