import styled, { css } from "styled-components";

const Button = (props) => {
  const { variant, children, ...otherProps } = props;

  let Component;
  if (variant === "primary") {
    Component = PrimaryButton;
  } else if (variant === "outlined") {
    Component = OutlinedButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component className="content" {...otherProps}>
      {children}
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
`;

const PrimaryButton = styled(ButtonBase)`
  background-color: var(--color-primary);
  color: var(--color-secondary);
`;

const OutlinedButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${(props) => props.color || "var(--color-text)"};
  border: 1px solid;
`;

export default Button;
