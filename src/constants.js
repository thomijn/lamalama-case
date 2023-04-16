export const COLORS = {
  background: "#F4F3E8",
  white: "#fff",
  black: "#000",
  primary: "#DCFEBC",
  secondary: "#1B4650",
  textColor: "#F5F5F5",
  darkGreen: "#0F2D2E",
};

export const LINKS = [
  "Impact",
  "How it works",
  "About",
  "Pricing",
  "Contact",
  "FAQ",
  "Jobs",
];

export const CARDS = [
  {
    type: "content",
    title: <h2>Sony NL joined treebytree!</h2>,
    text: <p>Gifting 3.000 trees to their employees.</p>,
    backgroundColor: "var(--color-primary)",
    backgroundPattern: {
      props: {
        fill: "#C2B7ED",
      },
      styles: {
        transform: "rotate(45deg) scale(2.5) translate(30px, -70px)",
      },
    },
  },
  {
    type: "image",
    image: "/assets/images/card-image-1.jpg",
  },
  {
    type: "content",
    title: <h2>50.000.000 trees sold!</h2>,
    text: (
      <p>
        Couple more to go. <br /> Join the movement!
      </p>
    ),
    backgroundColor: "#C2B7ED",
    backgroundPattern: {
      props: {
        fill: "#C2B7ED",
        stroke: "#DCFEBC",
      },
      styles: {
        bottom: 0,
        transform: "rotate(0deg) scale(2) translate(-0px, 130px)",
      },
    },
  },
  {
    type: "image",
    image: "/assets/images/card-image-2.jpg",
  },
  {
    type: "content",
    title: <h2>Be very impressed!</h2>,
    text: (
      <p>
        Be very impressed! <br /> Watch the video <a>over here</a>
      </p>
    ),
    backgroundColor: "#F4B8D1",
    backgroundPattern: {
      props: {
        fill: "#C2B7ED",
      },
      styles: {
        transform: "rotate(45deg) scale(2.5) translate(30px, -70px)",
      },
    },
  },
];
