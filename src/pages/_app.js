import localFont from "next/font/local";

import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
import Scene from "../components/three/Scene";

const cooper = localFont({
  src: "../../public/assets/fonts/CooperLtBTLight.ttf",
  variable: "--font-cooper",
});

const founders = localFont({
  src: [
    {
      path: "../../public/assets/fonts/FoundersGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FoundersGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-founders",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-base: ${founders.style.fontFamily};
        }
      `}</style>
      <Header fonts={[cooper, founders]} />
      <Scene />
      <main className={`${cooper.variable} ${founders.variable}`}>
        <GlobalStyles />
        <Component {...pageProps}></Component>
      </main>
    </>
  );
}
