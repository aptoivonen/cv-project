import WorkExperienceFormPartial from "./WorkExperienceFormPartial";

export default function WorkExperienceFormSection({
  experience,
  onExperienceChange,
  onExperienceAdd,
  onExperienceDelete,
}) {
  return (
    <div>
      <h2 className="form-heading">Work Experience</h2>
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
      <button type="button" onClick={onExperienceAdd}>
        Add Experience
      </button>
    </div>
  );
}
