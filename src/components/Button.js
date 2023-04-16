import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Button = (props) => {
  const { variant, children, ...otherProps } = props;
  const [hovered, setHovered] = useState(false);
  const mask = useRef();
  const button = useRef();

  let Component;
  if (variant === "primary") {
    Component = PrimaryButton;
  } else if (variant === "outlined") {
    Component = OutlinedButton;
  } else if (variant === "default") {
    Component = DefaultButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {
      gsap.to(mask.current, {
        y: hovered ? "0%" : "100%",
        duration: 0.4,
        ease: "power3.inOut",
      });
    });
  }, [hovered]);

  return (
    <Component
      ref={button}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="content"
      {...otherProps}
    >
      <span>{children}</span>
      <div ref={mask} className="button-mask" />
    </Component>
  );
};

const ButtonBase = styled.button`
  padding: 1rem 2rem;
  border-radius: 99999px;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: fit-content;
  overflow: hidden;
  position: relative;

  span {
    z-index: 2;
  }

  .button-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color || "var(--color-text)"};
    transform: translateY(-100%);
    z-index: 1;
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background-color: var(--color-primary);
  color: var(--color-secondary);
`;

const OutlinedButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${(props) => props.color || "var(--color-text)"};
  border: ${(props) =>
    `2px solid ${props.color}` || "2px solid var(--color-text)"};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--color-secondary);
  }

  @media (max-width: 800px) {
    &:hover {
      color: var(--color-text);
    }
  }
`;

const DefaultButton = styled(ButtonBase)`
  background-color: var(--color-darkGreen);
  color: var(--color-text);

  &:hover {
    color: var(--color-darkGreen);
  }

  @media (max-width: 800px) {
    &:hover {
      color: var(--color-text);
    }
  }
`;

export default Button;
