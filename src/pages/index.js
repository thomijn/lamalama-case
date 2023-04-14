import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thomas dev case</title>
        <meta name="description" content="Thomas dev case" />
      </Head>
      <Hero />
    </>
  );
}
