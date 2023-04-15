import { useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const FirstSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const targets = ["#outer", "#inner"];

    targets.forEach((target) => {
      gsap.to(target, {
        scrollTrigger: {
          trigger: "#first-section",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
        scale: target === "#outer" ? 1.1 : 1.3,
        duration: 1,
        ease: "none",
      });
    });
  }, []);

  return (
    <Wrapper id="first-section">
      <div className="content">
        <h2>
          Two things you don’t need. More plastic stuff with logo’s on it and
          the CO2 these gifts produce.
        </h2>
        <p>
          Nobody likes to receive a pen. But there is good news! You can now
          gift a personal tree to your business relations or employees.
        </p>
        <p>
          Treebytrees come with an amazing ‘unboxing experience’ and you get to
          track their growth and contribution to the environment, real-time in
          AR. Turning corporate gifting into giving back. How cool is that?
        </p>
        <Button variant="default">Gift a tree</Button>
      </div>

      <img id="outer" src="/assets/images/pattern-outer.svg" alt="pattern-bg" />
      <img id="inner" src="/assets/images/pattern-inner.svg" alt="pattern-bg" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }

  #inner {
    right: 230px;
  }

  .content {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 100%;
    }

    p {
      font-family: var(--font-founders);
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
    }
  }

  @media (max-width: 768px) {
    padding-inline: var(--space-xl);

    .content {
      h2 {
        font-size: 35px;
      }
    }

    #outer {
      top: -60px;
      width: 500px;
      height: 400px;
      right: -150px;
    }

    #inner {
      width: 150px;
      height: 200px;
      right: -30px;
    }
  }
`;

export default FirstSection;
