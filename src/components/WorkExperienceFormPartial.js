import Button from "./Button";

export default function WorkExperienceFormPartial({
  experience,
  onExperienceChange,
  onExperienceDelete,
}) {
  const handleChange = (e, id) => {
    const [name] = e.target.name.split("-");
    const value = e.target.value;
    onExperienceChange(id, name, value);
  };
  return (
    <div className="form-partial">
      <div className="form-control">
        <label className="form-label" htmlFor={`companyName-${experience.id}`}>
          Company Name:
        </label>
        <input
          className="form-input"
          type="text"
          name={`companyName-${experience.id}`}
          id={`companyName-${experience.id}`}
          value={experience.companyName}
          onChange={(e) => handleChange(e, experience.id)}
        />
      </div>
      <div className="form-control">
        <label
          className="form-label"
          htmlFor={`positionTitle-${experience.id}`}
        >
          Position:
        </label>
        <input
          className="form-input"
          type="text"
          name={`positionTitle-${experience.id}`}
          id={`positionTitle-${experience.id}`}
          value={experience.positionTitle}
          onChange={(e) => handleChange(e, experience.id)}
        />
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor={`mainTasks-${experience.id}`}>
          Main Tasks:
        </label>
        <textarea
          className="form-input"
          type="text"
          name={`mainTasks-${experience.id}`}
          id={`mainTasks-${experience.id}`}
          value={experience.mainTasks}
          onChange={(e) => handleChange(e, experience.id)}
        />
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor={`dateFrom-${experience.id}`}>
          Date From:
        </label>
        <input
          className="form-input"
          type="text"
          name={`dateFrom-${experience.id}`}
          id={`dateFrom-${experience.id}`}
          value={experience.dateFrom}
          onChange={(e) => handleChange(e, experience.id)}
        />
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor={`dateUntil-${experience.id}`}>
          Date Until:
        </label>
        <input
          className="form-input"
          type="text"
          name={`dateUntil-${experience.id}`}
          id={`dateUntil-${experience.id}`}
          value={experience.dateUntil}
          onChange={(e) => handleChange(e, experience.id)}
        />
      </div>

      <div className="button-group">
        <Button
          className="btn-delete"
          onClick={() => onExperienceDelete(experience.id)}
        >
          Remove Work Experience
        </Button>
      </div>
    </div>
  );
}
