import PropTypes from "prop-types";
import ButtonGroup from "./ButtonGroup";
import DeleteButton from "./DeleteButton";
import Input from "./Input";

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
        <Input
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
        <Input
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
        <Input
          type="textarea"
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
        <Input
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
        <Input
          type="text"
          name={`dateUntil-${experience.id}`}
          id={`dateUntil-${experience.id}`}
          value={experience.dateUntil}
          onChange={(e) => handleChange(e, experience.id)}
        />
      </div>

      <ButtonGroup>
        <DeleteButton onClick={() => onExperienceDelete(experience.id)}>
          Remove Work Experience
        </DeleteButton>
      </ButtonGroup>
    </div>
  );
}

WorkExperienceFormPartial.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.string,
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    mainTasks: PropTypes.string,
    dateFrom: PropTypes.string,
    dateUntil: PropTypes.string,
  }).isRequired,
  onExperienceChange: PropTypes.func.isRequired,
  onExperienceDelete: PropTypes.func.isRequired,
};
