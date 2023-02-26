import Head from "next/head";
import { Container } from "react-bootstrap";
import ImagesContainer from "@/components/UI/ImagesContainer";
import NinaBW from "../public/nina_home_bw.png";
import PlutoBW from "../public/pluto_main_bw.png";
import SouksBW from "../public/souks_home_bw.png";
import WildEdenBW from "../public/wild_eden_home_bw.png";
import WellbeingMusicBW from "../public/wb_music_bw.png";
import ReigateDadsBW from "../public/rdfc_home_bw.png";
import InvitationBW from "../public/invitation_bw.png";
import SouksMapBW from "../public/souks_map_bw.png";
import RedundancyCalculatorBW from "../public/redundancy_calculator_bw.png";
import SouksProductBW from "../public/souks_product_bw.png";
import TieUpsBW from "../public/tie_ups_bw.png";
import PlutoIntroBW from "../public/pluto_intro_bw.png";
import ZoomInBox from "@/components/UI/ZoomInBox";

const images = [
  { alt: "Home page of Nina Wedding Singer", src: NinaBW },
  { alt: "Finding Pluto Game", src: PlutoBW },
  { alt: "Home page or 1001 Moroccan Souks", src: SouksBW },
  { alt: "Mobile birthday invitation", src: InvitationBW },
  { alt: "Tie Ups  Uk Home Page", src: TieUpsBW },
  { alt: "1001 Moroccan Souks makers map", src: SouksMapBW },

  { alt: "Finding Pluto game intro", src: PlutoIntroBW },
  { alt: "Redundancy Calculator app", src: RedundancyCalculatorBW },
  { alt: "1001 Moroccan Souks product page", src: SouksProductBW },
  { alt: "Preview of Wild Eden site", src: WildEdenBW },
  { alt: "Preview of Reigate Dads site", src: ReigateDadsBW },
  { alt: "Preview of Wellbeing Music site", src: WellbeingMusicBW },
];

function Home() {
  return (
    <>
      <Head>
        <title>Taylor-Made WD - Home</title>
      </Head>
      <ImagesContainer images={images} />
      <ZoomInBox color="white" background="black" height="120" width="400">
        Taylor Made Web Design
      </ZoomInBox>
      <Container>
        <p>
          If you're looking for a freelance web developer to take your online
          presence to the next level, look no further! I specialize in creating
          stunning, fully responsive website designs that place emphasis on
          modern user experience (UX). By using industry-leading creative tools
          and the latest tech trends, I can deliver custom solutions targeted to
          your business needs. With features like intuitive navigation and
          eye-catching design elements, I can help you stand out from
          competitors and reach your target audience in an effective way. Get in
          touch today for a no obligations quote and let me show you how we can
          help take your website from ordinary to extraordinary!
        </p>
        <p>
          I offer bespoke approaches to designing and developing websites that
          keep your clients engaged. My services are tailored specifically to
          meet your needs and provide the best user experience (UX). From
          responsive design and development to coding, I'm here to make sure
          your website runs like a well-oiled machine. If you're ready to take
          your business to the next level, get in touch with me - I'm passionate
          about what I do and look forward to working with you!
        </p>
      </Container>
    </>
  );
}

export default Home;
