import "./Form.css";
import PersonalInfoFormSection from "./PersonalInfoFormSection";
import EducationFormSection from "./EducationFormSection";
import WorkExperienceFormSection from "./WorkExperienceFormSection";

export default function Form() {
  return (
    <form className="form">
      <PersonalInfoFormSection />
      <EducationFormSection />
      <WorkExperienceFormSection />
    </form>
  );
}
