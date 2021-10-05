import "./Panel.css";

export default function Panel(props) {
  return (
    <div {...props} className="panel">
      {props.children}
    </div>
  );
}
