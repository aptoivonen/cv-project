import "./Button.css";

export default function Button({ className = "", children, ...rest }) {
  let styles = "btn";
  if (className) {
    styles += ` ${className}`;
  }
  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}
