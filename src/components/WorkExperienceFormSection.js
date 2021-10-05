import PropTypes from "prop-types";
import Button from "./Button";
import FormSection from "./FormSection";
import WorkExperienceFormPartial from "./WorkExperienceFormPartial";

export default function WorkExperienceFormSection({
  experienceList,
  onExperienceChange,
  onExperienceAdd,
  onExperienceDelete,
}) {
  return (
    <FormSection title="Work Experience">
      <div className="form-group">
        {experienceList.map((edu) => (
          <WorkExperienceFormPartial
            key={edu.id}
            experience={edu}
            onExperienceChange={onExperienceChange}
            onExperienceDelete={onExperienceDelete}
          />
        ))}
      </div>
      <div className="button-group">
        <Button className="btn-add" type="button" onClick={onExperienceAdd}>
          Add Experience
        </Button>
      </div>
    </FormSection>
  );
}

WorkExperienceFormSection.propTypes = {
  experienceList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      companyName: PropTypes.string,
      positionTitle: PropTypes.string,
      mainTasks: PropTypes.string,
      dateFrom: PropTypes.string,
      dateUntil: PropTypes.string,
    })
  ).isRequired,
  onExperienceChange: PropTypes.func.isRequired,
  onExperienceAdd: PropTypes.func.isRequired,
  onExperienceDelete: PropTypes.func.isRequired,
};
