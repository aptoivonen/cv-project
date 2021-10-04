import Button from "./Button";
import FormSection from "./FormSection";
import WorkExperienceFormPartial from "./WorkExperienceFormPartial";

export default function WorkExperienceFormSection({
  experience,
  onExperienceChange,
  onExperienceAdd,
  onExperienceDelete,
}) {
  return (
    <FormSection title="Work Experience">
      <div className="form-group">
        {experience.map((edu) => (
          <WorkExperienceFormPartial
            key={edu.id}
            experience={edu}
            onExperienceChange={onExperienceChange}
            onExperienceDelete={onExperienceDelete}
          />
        ))}
      </div>
      <Button className="btn-add" type="button" onClick={onExperienceAdd}>
        Add Experience
      </Button>
    </FormSection>
  );
}
