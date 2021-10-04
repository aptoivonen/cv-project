import "./Form.css";
import PersonalInfoFormSection from "./PersonalInfoFormSection";
import EducationFormSection from "./EducationFormSection";
import WorkExperienceFormSection from "./WorkExperienceFormSection";

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
    <form className="form" onSubmit={handleSubmit}>
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
      <button type="submit">Done</button>
    </form>
  );
}
