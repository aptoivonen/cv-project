import "./Button.css";
import PropTypes from "prop-types";

export default function Button({ className, ...props }) {
  const styles = `btn ${className}`;
  return (
    <button {...props} className={styles}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
};
