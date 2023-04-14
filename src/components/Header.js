import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

import Button from "./Button";

const Header = ({ fonts }) => {
  useEffect(() => {
    gsap.to(".header", {
      y: 0,
      duration: 1,
      delay: 1.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <Wrapper className={`${fonts[0].variable} ${fonts[1].variable} header`}>
      <div className="left">
        <i>
          <img src="./assets/images/logo.svg" alt="logo" />
        </i>
        <nav>
          <a>Impact</a>
          <a>How it works</a>
          <a>About</a>
          <a>Pricing</a>
          <a>Contact</a>
          <a>FAQ</a>
          <a>Jobs</a>
        </nav>
      </div>
      <div className="right">
        <Button variant="outlined">Log in</Button>
        <Button variant="primary">Gift a tree</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  width: calc(100% - 20px);
  height: 70px;
  left: 50%;
  transform: translateX(-50%) translateY(-100px);
  margin-top: 10px;
  background: var(--color-secondary);
  display: flex;
  justify-content: space-between;
  border-radius: 68px;
  padding: 10px;
  color: var(--color-text);
  font-family: var(--font-base);
  font-weight: 400;

  .left {
    display: flex;
    align-items: center;
    margin-left: 10px;

    i {
      cursor: pointer;
    }
    nav {
      transform: translateY(1px);
      display: flex;
      margin-left: var(--space-xxl);
      font-size: 1rem;
      a {
        cursor: pointer;
        line-height: 1.75rem;

        margin-left: var(--space-xl);
      }
    }
  }

  .right {
    display: flex;
    gap: 10px;
  }
`;

export default Header;
