import "./Button.css";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button(props) {
  const styles = classNames("btn", props.className);
  return (
    <button {...props} className={styles}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
};
