import "./Label.css";
import classNames from "classnames";

export default function Label(props) {
  const styles = classNames("label", props.className);
  return (
    <label {...props} className={styles}>
      {props.children}
    </label>
  );
}
