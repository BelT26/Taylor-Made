import classes from "./ProjectDetail.module.css";
import ReactMarkdown from "react-markdown";

function ProjectDetail(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <ReactMarkdown>{props.content}</ReactMarkdown>
    </>
  );
}

export default ProjectDetail;
