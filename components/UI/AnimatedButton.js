import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import classes from "./animatedbutton.module.scss";

function AnimatedButton(props) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <defs>
          <symbol id="arrow" viewBox="0 0 100 100">
            <path d="M12.5 45.83h64.58v8.33H12.5z" />
            <path d="M59.17 77.92l-5.84-5.84L75.43 50l-22.1-22.08 5.84-5.84L87.07 50z" />
          </symbol>
        </defs>
      </svg>

      <div className={classes.animated_button_container}>
        <div className={classes.animated_button_content}>
          <Link
            href={props.link}
            className={classes.animated_button}
            style={{ color: "white" }}
          >
            {" "}
            <div className={classes.button_text}>{props.children}</div>
            <span>
              <HiArrowNarrowRight className={classes.right_arrow} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AnimatedButton;
