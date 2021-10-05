import "./Input.css";
import classNames from "classnames";

export default function Input(props) {
  const styles = classNames("form-input", props.className);
  let element =
    props.type === "textarea" ? (
      <textarea {...props} className={styles} />
    ) : (
      <input {...props} className={styles} />
    );

  return element;
}
