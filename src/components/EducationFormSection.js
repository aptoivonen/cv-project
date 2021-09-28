import uniqid from "uniqid";
import EducationFormPartial from "./EducationFormPartial";

export default function EducationFormSection({ education, onEducationChange }) {
  const handleChange = (e, id) => {
    const [name] = e.target.name.split("-");
    const value = e.target.value;
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

  const handleAdd = () => {
    const newEducation = [
      ...education,
      { id: uniqid(), schoolName: "", titleOfStudy: "", dateOfStudy: "" },
    ];
    onEducationChange(newEducation);
  };

  return (
    <div>
      <h2 className="form-heading">Education</h2>
      <div className="form-group">
        {education.map((edu) => (
          <EducationFormPartial
            key={edu.id}
            education={edu}
            onChange={handleChange}
          />
        ))}
      </div>
      <button type="button" onClick={handleAdd}>
        Add Education
      </button>
    </div>
  );
}
