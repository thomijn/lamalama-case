import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

import Button from "./Button";
import { LINKS } from "@/constants";

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
    <Wrapper
      className={`${fonts[0].variable} ${fonts[1].variable} header content`}
    >
      <div className="left">
        <i>
          <img src="./assets/images/logo.svg" alt="logo" />
        </i>
        <nav>
          {LINKS.map((link, index) => (
            <Link key={link} index={index}>
              {link}
            </Link>
          ))}
        </nav>
      </div>
      <div className="right">
        <Button color="var(--color-text)" variant="outlined">
          Log in
        </Button>
        <Button variant="primary">Gift a tree</Button>
      </div>
    </Wrapper>
  );
};

const Link = ({ children, index, ...props }) => {
  const [hovered, setHovered] = useState(false);
  const svg = useRef();

  useEffect(() => {
    gsap.to(svg.current, {
      rotation: index % 2 === 0 ? 0 : -180,
      opacity: hovered ? 1 : 0,
      duration: 0.3,
      ease: "power3.inOut",
    });
  }, [hovered]);

  return (
    <a
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        ref={svg}
        strokeWidth="6"
        width="40"
        height="11"
        viewBox="0 0 40 11"
        stroke="#dcfebc"
      >
        <path
          stroke="#dcfebc"
          d="M3.23519 7.02865C4.27409 6.77056 18.4948 2.8363 22.118 3.03921C26.6471 3.29285 29.7558 7.09611 36.4404 7.01833C41.7881 6.95612 47.6531 4.52424 48.5193 4.29911"
          pathLength="1"
        ></path>
      </svg>
      {children}
    </a>
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
  z-index: 100;
  overflow: hidden;
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
        position: relative;
        display: block;
        svg {
          z-index: 1;
          display: block;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 20px;
        }
      }
    }
  }

  .right {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 768px) {
    height: 60px;

    .left {
      nav {
        display: none;
      }
    }

    .right {
      display: none;
    }
  }
`;

export default Header;
