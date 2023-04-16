import styled from "styled-components";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Card from "./Card";
import BackgroundPattern from "./BackgroundPattern";
import { CARDS } from "@/constants";

const SecondSection = () => {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      gsap.registerPlugin(ScrollTrigger);
      //get card width
      const cardWidth = document.querySelector(".card").offsetWidth;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start: "top top",
          end: "100%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(".card", {
        x:
          -cardWidth * 5 -
          (window.innerWidth < 768 ? 160 : 280) +
          window.innerWidth,
        ease: "none",
      });
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <Wrapper ref={main} id="section-two">
      <div className="cardswrapper">
        {CARDS.map((card, index) => {
          return (
            <Card
              key={index}
              type={card.type}
              background={card.backgroundColor}
              image={card.image}
            >
              {card.type === "content" && (
                <div className="card-content">
                  {card.title}
                  {card.text}
                </div>
              )}
              {card.backgroundPattern && (
                <BackgroundPattern
                  styles={card.backgroundPattern.styles}
                  props={card.backgroundPattern.props}
                />
              )}
            </Card>
          );
        })}
      </div>
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
  background-color: var(--color-secondary);
  overflow: hidden;

  .cardswrapper {
    width: fit-content;
    padding-inline: 6rem;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: var(--space-lg);
  }

  @media (max-width: 768px) {
    .cardswrapper {
      padding-inline: 2rem;
    }
`;

export default SecondSection;
