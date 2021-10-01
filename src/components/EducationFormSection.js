import EducationFormPartial from "./EducationFormPartial";

export default function EducationFormSection({
  education,
  onEducationChange,
  onEducationAdd,
  onEducationDelete,
}) {
  const handleChange = (id, name, value) => {
    const newEducation = education.map((edu) =>
      edu.id === id
        ? {
            ...edu,
            [name]: value,
          }
        : edu
    );
    onEducationChange(newEducation);
  };

  // const handleDelete = (id) => {
  //   const newEducation = education.filter((edu) => edu.id !== id);
  //   onEducationChange(newEducation);
  // };

  return (
    <div>
      <h2 className="form-heading">Education</h2>
      <div className="form-group">
        {education.map((edu) => (
          <EducationFormPartial
            key={edu.id}
            education={edu}
            onChange={handleChange}
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
