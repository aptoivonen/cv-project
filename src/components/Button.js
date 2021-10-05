import "./Button.css";
import PropTypes from "prop-types";

export default function Button({ className, children, ...rest }) {
  const styles = `btn ${className}`;
  return (
    <button {...rest} className={styles}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
};
