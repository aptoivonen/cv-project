import "./DeleteButton.css";
import Button from "./Button";

export default function DeleteButton(props) {
  return (
    <Button {...props} className="btn-delete" type="button">
      {props.children}
    </Button>
  );
}
