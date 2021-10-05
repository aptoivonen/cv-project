import "./FormSection.css";
import PropTypes from "prop-types";

export default function FormSection({ title, children }) {
  return (
    <div className="form-section">
      <h2 className="form-heading">{title}</h2>
      {children}
    </div>
  );
}

FormSection.propTypes = {
  title: PropTypes.string.isRequired,
};
