import React from "react";
import styled, { css } from "styled-components";

const Card = ({ type, background, image, children }) => {
  return (
    <CardWrapper
      className="card"
      image={image}
      type={type}
      background={background}
    >
      {children}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  position: relative;
  min-width: 420px;
  height: 440px;
  background: var(--color-primary);
  border-radius: 16px;
  padding: var(--space-xl);
  background: ${(props) => props.background};
  position: relative;
  overflow: hidden;

  svg {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    h2 {
      z-index: 2;
      font-size: 50px;
      line-height: 3.2rem;
      font-weight: 400;
      color: #1a1a31;
      margin: 0;
    }

    p {
      z-index: 2;
      font-weight: 400;
      font-size: 20px;
      color: #1b4650;
      line-height: 1.4rem;
    }
  }
  ${(props) =>
    props.type === "image" &&
    css`
      background: url(${(props) => props.image});
      background-size: cover;
      background-position: center;
    `};

  @media (max-width: 768px) {
    min-width: 300px;
    height: 440px;
  }
`;

export default Card;
