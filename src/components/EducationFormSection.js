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
      <button type="button" onClick={onEducationAdd}>
        Add Education
      </button>
    </FormSection>
  );
}
