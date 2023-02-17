import classes from "./ProjectDetail.module.css";

function ProjectDetail(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </>
  );
}
export default ProjectDetail;
