import PropTypes from "prop-types";
import ButtonGroup from "./ButtonGroup";
import DeleteButton from "./DeleteButton";
import Input from "./Input";
import Label from "./Label";
import FormControl from "./FormControl";

export default function EducationFormPartial({
  education,
  onEducationChange,
  onEducationDelete,
}) {
  const handleChange = (e, id) => {
    const [name] = e.target.name.split("-");
    const value = e.target.value;
    onEducationChange(id, name, value);
  };
  return (
    <div className="form-partial">
      <FormControl>
        <Label htmlFor={`schoolName-${education.id}`}>School Name:</Label>
        <Input
          type="text"
          name={`schoolName-${education.id}`}
          id={`schoolName-${education.id}`}
          value={education.schoolName}
          onChange={(e) => handleChange(e, education.id)}
        />
      </FormControl>
      <FormControl>
        <Label htmlFor={`titleOfStudy-${education.id}`}>Title of Study:</Label>
        <Input
          type="text"
          name={`titleOfStudy-${education.id}`}
          id={`titleOfStudy-${education.id}`}
          value={education.titleOfStudy}
          onChange={(e) => handleChange(e, education.id)}
        />
      </FormControl>
      <FormControl>
        <Label htmlFor={`dateOfStudy-${education.id}`}>Date of Study:</Label>
        <Input
          type="text"
          name={`dateOfStudy-${education.id}`}
          id={`dateOfStudy-${education.id}`}
          value={education.dateOfStudy}
          onChange={(e) => handleChange(e, education.id)}
        />
      </FormControl>

      <ButtonGroup>
        <DeleteButton onClick={() => onEducationDelete(education.id)}>
          Remove education
        </DeleteButton>
      </ButtonGroup>
    </div>
  );
}

EducationFormPartial.propTypes = {
  education: PropTypes.shape({
    id: PropTypes.string,
    schoolName: PropTypes.string,
    titleOfStudy: PropTypes.string,
    dateOfStudy: PropTypes.string,
  }).isRequired,
  onEducationChange: PropTypes.func.isRequired,
  onEducationDelete: PropTypes.func.isRequired,
};
