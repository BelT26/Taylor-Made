import Head from "next/head";
import AnimatedButton from "@/components/UI/AnimatedButton";

function About() {
  return (
    <>
      <Head>
        <title>Taylor-Made WD - About</title>
      </Head>
      <h1>About</h1>
      <AnimatedButton>Click Me</AnimatedButton>
    </>
  );
}

export default About;
