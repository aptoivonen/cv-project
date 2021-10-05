import PropTypes from "prop-types";
import AddButton from "./AddButton";
import ButtonGroup from "./ButtonGroup";
import EducationFormPartial from "./EducationFormPartial";
import FormSection from "./FormSection";

export default function EducationFormSection({
  educationList,
  onEducationChange,
  onEducationAdd,
  onEducationDelete,
}) {
  return (
    <FormSection title="Education">
      <div className="form-group">
        {educationList.map((edu) => (
          <EducationFormPartial
            key={edu.id}
            education={edu}
            onEducationChange={onEducationChange}
            onEducationDelete={onEducationDelete}
          />
        ))}
      </div>
      <ButtonGroup>
        <AddButton onClick={onEducationAdd}>Add Education</AddButton>
      </ButtonGroup>
    </FormSection>
  );
}

EducationFormSection.propTypes = {
  educationList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      schoolName: PropTypes.string,
      titleOfStudy: PropTypes.string,
      dateOfStudy: PropTypes.string,
    })
  ).isRequired,
  onEducationChange: PropTypes.func.isRequired,
  onEducationAdd: PropTypes.func.isRequired,
  onEducationDelete: PropTypes.func.isRequired,
};
