import classes from "./zoominbox.module.css";

function ZoomInBox(props) {
  return (
    <div
      className={classes.zoom_in_box}
      style={{
        backgroundColor: props.background,
        color: props.color,
        height: props.height,
        width: props.width,
      }}
    >
      <h1>{props.children}</h1>
    </div>
  );
}

export default ZoomInBox;
