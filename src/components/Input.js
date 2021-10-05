import "./Input.css";

export default function Input(props) {
  const styles = `form-input ${props.className}`;
  let element =
    props.type === "textarea" ? (
      <textarea {...props} className={styles} />
    ) : (
      <input {...props} className={styles} />
    );

  return element;
}
