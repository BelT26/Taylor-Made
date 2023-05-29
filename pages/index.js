import Head from "next/head";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import StaticHeroImage from "@/components/UI/StaticHeroImage";

import Web2 from "../public/images/spider-web2.jpg";

import classes from "./index.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>Taylor-Made WD - Home</title>
      </Head>
      <StaticHeroImage
        src={Web2}
        alt="a spider's web with jewelled raindrops"
      />
      <Container>
        <div className={classes.zoom_in_box}>
          <h1>
            <span className={classes.taylor}>Taylor-Made </span>
            <span className={classes.web}>WEB DESIGN</span>
          </h1>
          <h2 className={classes.slogan}>
            Innovative and bespoke digital solutions
          </h2>
        </div>
      </Container>
      <Container>
        <div className={classes.box}>
          <h2>Eye Catching Title</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            magni deserunt corporis earum, hic, molestiae rem totam, mollitia
            accusantium harum tempore asperiores et temporibus officia odio
            fugit distinctio quibusdam delectus.
          </h4>
        </div>
      </Container>
    </>
  );
}

export default Home;
