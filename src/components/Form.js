import "./Form.css";
import PersonalInfoFormSection from "./PersonalInfoFormSection";
import EducationFormSection from "./EducationFormSection";
import WorkExperienceFormSection from "./WorkExperienceFormSection";

export default function Form({ personalInfo, onPersonalInfoChange, onSubmit }) {
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
      <EducationFormSection />
      <WorkExperienceFormSection />
      <button type="submit">Done</button>
    </form>
  );
}
