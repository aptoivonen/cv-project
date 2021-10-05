import "./Container.css";

export default function Container(props) {
  return (
    <div {...props} className="container">
      {props.children}
    </div>
  );
}
