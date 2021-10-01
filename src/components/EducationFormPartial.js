export default function EducationFormPartial({
  education,
  onChange,
  onEducationDelete,
}) {
  const handleChange = (e, id) => {
    const [name] = e.target.name.split("-");
    const value = e.target.value;
    onChange(id, name, value);
  };
  return (
    <div>
      <button onClick={() => onEducationDelete(education.id)}>Delete</button>
      <div className="form-control">
        <label className="form-label" htmlFor={`schoolName-${education.id}`}>
          School Name:
        </label>
        <input
          className="form-input"
          type="text"
          name={`schoolName-${education.id}`}
          id={`schoolName-${education.id}`}
          value={education.schoolName}
          onChange={(e) => handleChange(e, education.id)}
        />
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor={`titleOfStudy-${education.id}`}>
          Title of Study:
        </label>
        <input
          className="form-input"
          type="text"
          name={`titleOfStudy-${education.id}`}
          id={`titleOfStudy-${education.id}`}
          value={education.titleOfStudy}
          onChange={(e) => handleChange(e, education.id)}
        />
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor={`dateOfStudy-${education.id}`}>
          Date of Study:
        </label>
        <input
          className="form-input"
          type="text"
          name={`dateOfStudy-${education.id}`}
          id={`dateOfStudy-${education.id}`}
          value={education.dateOfStudy}
          onChange={(e) => handleChange(e, education.id)}
        />
      </div>
    </div>
  );
}
