import Button from "./Button";

export default function EducationFormPartial({
  education,
  onEducationChange,
  onEducationDelete,
}) {
  const handleChange = (e, id) => {
    const [name] = e.target.name.split("-");
    const value = e.target.value;
    onEducationChange(id, name, value);
  };
  return (
    <div className="form-partial">
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

      <div className="button-group">
        <Button
          className="btn-delete"
          onClick={() => onEducationDelete(education.id)}
        >
          Remove education
        </Button>
      </div>
    </div>
  );
}
