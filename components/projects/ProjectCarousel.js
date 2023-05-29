import HeroImageCarousel from "../UI/HeroImageCarousel";

const carouselImages = [
  {
    imgSrc: "/images/1001-souks.PNG",
    id: "im1",
    alt: "1001 Moroccan Souks home page",
  },
  {
    imgSrc: "/images/nina-wedding-singer.PNG",
    id: "im2",
    alt: "Nina Wedding Singer home page",
  },
  {
    imgSrc: "/images/wild-eden.PNG",
    id: "im3",
    alt: "Wild Eden home page",
  },
  {
    imgSrc: "/images/reigate-dads.PNG",
    id: "im4",
    alt: "Reigate Dads home page",
  },
  {
    imgSrc: "/images/wellbeing-music.PNG",
    id: "im5",
    alt: "Wellbeing Music home page",
  },
  {
    imgSrc: "/images/finding-pluto.PNG",
    id: "im6",
    alt: "Finding Pluto game",
  },
  {
    imgSrc: "/images/invitation.PNG",
    id: "im7",
    alt: "mobile birthday invitation",
  },
  {
    imgSrc: "/images/redundancy-calculator.PNG",
    id: "im8",
    alt: "terminal based redundancy calculator app",
  },
  {
    imgSrc: "/images/tie-ups.PNG",
    id: "im9",
    alt: "Tie Ups UK home page",
  },
];

function ProjectCarousel() {
  return <HeroImageCarousel images={carouselImages} />;
}

export default ProjectCarousel;
