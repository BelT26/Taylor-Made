import ProjectList from "../../components/projects/ProjectList";
import Container from "react-bootstrap/Container";

const my_projects = [
  {
    id: "WBM",
    title: "Well Being Music",
    image: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas felis a elit dapibus, vitae placerat turpis commodo. Duis et ipsum aliquet tortor ullamcorper suscipit at ac diam. Nullam varius sed ante ut pretium. Sed aliquet mattis fringilla. Donec hendrerit neque eros, eget facilisis est ullamcorper sed. Sed sodales leo tellus, congue varius lacus fringilla vel. Curabitur sed congue turpis. Morbi at nisi nec velit pulvinar lacinia in sit amet mi. Mauris sollicitudin elit non sapien elementum condimentum. Sed suscipit nisi vel convallis lobortis. Suspendisse gravida metus faucibus arcu volutpat, quis tempus leo interdum. Morbi molestie posuere lorem id lobortis. Morbi maximus iaculis laoreet.",
    url: "",
    imageAlign: "right",
  },
  {
    id: "WED",
    title: "Wild Eden",
    image: "",
    description:
      "Integer pulvinar volutpat fringilla. Phasellus dapibus justo a nibh elementum, ut ornare neque maximus. Nullam suscipit elementum turpis, nec viverra lacus venenatis vitae. In hac habitasse platea dictumst. Duis venenatis leo massa, vel condimentum sapien tincidunt sed. Integer ornare felis ex, sed fermentum leo elementum in. Donec porttitor dui massa, id sagittis ante malesuada vitae. Vivamus id mattis ligula, a viverra metus. Integer at velit mollis, imperdiet metus non, venenatis sem. Maecenas efficitur lectus quis ipsum vestibulum, gravida sagittis leo mollis. Cras et orci id velit dapibus tempor.",
    url: "",
    imageAlign: "left",
  },
  {
    id: "NWS",
    title: "Nina Wedding Singer",
    image: "",
    description:
      "Maecenas commodo maximus massa at laoreet. Nunc tempor purus id ipsum finibus, at convallis metus elementum. Mauris mauris enim, efficitur sed ligula in, fermentum venenatis tellus. Vivamus ultrices interdum est, quis pellentesque elit mollis sed. In sit amet eros at sapien bibendum maximus eu quis risus. Nunc et aliquam mauris. Aliquam aliquet urna libero, id mattis nibh egestas vel. Vestibulum vitae dolor erat. Suspendisse varius dignissim porta. Phasellus fermentum, massa eget pretium cursus, enim massa aliquam nibh, a pellentesque quam tellus et augue. Pellentesque ante nisl, ornare sit amet malesuada a, ultrices eu justo. Aliquam et pretium erat, in gravida justo.",
    url: "",
    imageAlign: "right",
  },
  {
    id: "FPL",
    title: "Finding Pluto",
    image: "",
    description:
      "Suspendisse quis volutpat est. Fusce a placerat elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel ultrices risus. Praesent iaculis orci ante. Suspendisse at quam eget ipsum feugiat euismod vitae a lacus. Proin vel magna hendrerit, varius augue id, tincidunt ex. Donec varius metus scelerisque viverra sagittis. Sed vitae fermentum purus. Donec at sagittis dui, in mollis leo. Nullam accumsan tempor vulputate.",
    url: "",
    imageAlign: "right",
  },
];

function Portfolio() {
  return (
    <Container fluid>
      <h1>Portfolio</h1>
      <ProjectList projects={my_projects} />
    </Container>
  );
}

export default Portfolio;
