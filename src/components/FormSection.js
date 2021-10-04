import "./FormSection.css";

export default function FormSection({ title, children }) {
  return (
    <div className="form-section">
      <h2 className="form-heading">{title}</h2>
      {children}
    </div>
  );
}
