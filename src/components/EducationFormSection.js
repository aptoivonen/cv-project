import Button from "./Button";
import EducationFormPartial from "./EducationFormPartial";
import FormSection from "./FormSection";

export default function EducationFormSection({
  education,
  onEducationChange,
  onEducationAdd,
  onEducationDelete,
}) {
  return (
    <FormSection title="Education">
      <div className="form-group">
        {education.map((edu) => (
          <EducationFormPartial
            key={edu.id}
            education={edu}
            onEducationChange={onEducationChange}
            onEducationDelete={onEducationDelete}
          />
        ))}
      </div>
      <div className="button-group">
        <Button className="btn-add" type="button" onClick={onEducationAdd}>
          Add Education
        </Button>
      </div>
    </FormSection>
  );
}
