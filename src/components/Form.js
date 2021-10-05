import "./Form.css";
import PersonalInfoFormSection from "./PersonalInfoFormSection";
import EducationFormSection from "./EducationFormSection";
import WorkExperienceFormSection from "./WorkExperienceFormSection";
import Button from "./Button";

export default function Form({
  personalInfo,
  onPersonalInfoChange,
  education,
  onEducationChange,
  onEducationAdd,
  onEducationDelete,
  experience,
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
        education={education}
        onEducationChange={onEducationChange}
        onEducationAdd={onEducationAdd}
        onEducationDelete={onEducationDelete}
      />
      <WorkExperienceFormSection
        experience={experience}
        onExperienceChange={onExperienceChange}
        onExperienceAdd={onExperienceAdd}
        onExperienceDelete={onExperienceDelete}
      />
      <div className="button-group">
        <Button className="btn-done" type="submit">
          Done
        </Button>
      </div>
    </form>
  );
}
