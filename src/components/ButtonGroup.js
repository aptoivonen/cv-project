import "./ButtonGroup.css";

export default function ButtonGroup(props) {
  return (
    <div {...props} className="button-group">
      {props.children}
    </div>
  );
}
