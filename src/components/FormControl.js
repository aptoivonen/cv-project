import "./FormControl.css";

export default function FormControl(props) {
  return (
    <div {...props} className="form-control">
      {props.children}
    </div>
  );
}
