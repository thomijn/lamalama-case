import { createGlobalStyle } from "styled-components";

import { COLORS } from "../constants.js";

const GlobalStyles = createGlobalStyle`

:root {
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-xxl: 48px;
    --space-xxxl: 64px;

    --color-background: ${COLORS.background};
    --color-white: ${COLORS.white};
    --color-black: ${COLORS.black};
    --color-primary: ${COLORS.primary};
    --color-secondary: ${COLORS.secondary};
    --color-text: ${COLORS.textColor};
}

*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}

html {
  background-color: var(--color-background);
}

html, body, #__next {
  height: 100%;
  width: 100%;
  font-family: var(--font-base);
  font-weight: 500;
  font-size: 16px;

}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}

h1, h2, h3 {
  font-family: var(--font-cooper);
}

canvas {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

`;

export default GlobalStyles;
