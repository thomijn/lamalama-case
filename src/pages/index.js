import Head from "next/head";

import Hero from "@/components/Hero";
import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thomas dev case</title>
        <meta name="description" content="Thomas dev case" />
      </Head>
      <Hero />
      <FirstSection />
      <SecondSection />
    </>
  );
}
