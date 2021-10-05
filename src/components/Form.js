import "./Form.css";
import PropTypes from "prop-types";
import PersonalInfoFormSection from "./PersonalInfoFormSection";
import EducationFormSection from "./EducationFormSection";
import WorkExperienceFormSection from "./WorkExperienceFormSection";
import DoneButton from "./DoneButton";

export default function Form({
  personalInfo,
  onPersonalInfoChange,
  educationList,
  onEducationChange,
  onEducationAdd,
  onEducationDelete,
  experienceList,
  onExperienceChange,
  onExperienceAdd,
  onExperienceDelete,
  onSubmit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="form form-bg" onSubmit={handleSubmit}>
      <PersonalInfoFormSection
        personalInfo={personalInfo}
        onPersonalInfoChange={onPersonalInfoChange}
      />
      <EducationFormSection
        educationList={educationList}
        onEducationChange={onEducationChange}
        onEducationAdd={onEducationAdd}
        onEducationDelete={onEducationDelete}
      />
      <WorkExperienceFormSection
        experienceList={experienceList}
        onExperienceChange={onExperienceChange}
        onExperienceAdd={onExperienceAdd}
        onExperienceDelete={onExperienceDelete}
      />
      <div className="button-group">
        <DoneButton />
      </div>
    </form>
  );
}

Form.propTypes = {
  personalInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
  onPersonalInfoChange: PropTypes.func.isRequired,
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
  onSubmit: PropTypes.func.isRequired,
};
