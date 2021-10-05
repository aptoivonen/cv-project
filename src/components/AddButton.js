import "./AddButton.css";
import Button from "./Button";

export default function AddButton(props) {
  return (
    <Button {...props} className="btn-add" type="button">
      {props.children}
    </Button>
  );
}
