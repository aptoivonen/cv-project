import "./EditButton.css";
import Button from "./Button";

export default function EditButton(props) {
  return (
    <Button {...props} className="btn-edit" type="button">
      Edit
    </Button>
  );
}
