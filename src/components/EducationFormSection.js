import EducationFormPartial from "./EducationFormPartial";

export default function EducationFormSection({
  education,
  onEducationChange,
  onEducationAdd,
  onEducationDelete,
}) {
  return (
    <div>
      <h2 className="form-heading">Education</h2>
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
    </div>
  );
}
