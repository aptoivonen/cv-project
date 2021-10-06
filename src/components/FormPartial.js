import "./FormPartial.css";

export default function FormPartial(props) {
  return (
    <div {...props} className="form-partial">
      {props.children}
    </div>
  );
}
