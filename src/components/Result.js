import PropTypes from "prop-types";
import ButtonGroup from "./ButtonGroup";
import EditButton from "./EditButton";
import "./Result.css";

export default function Result({
  personalInfo,
  educationList,
  experienceList,
  onEdit,
}) {
  return (
    <div>
      <div className="form result-bg">
        <div className="result-section result-section--main">
          <h2 className="result-mainheading">
            {personalInfo.firstName} {personalInfo.lastName}
          </h2>
          <div className="result-info">
            <p className="result-label">Email</p>
            <p className="result-text">{personalInfo.email}</p>
            <p className="result-label">Phone</p>
            <p className="result-text">{personalInfo.phoneNumber}</p>
          </div>
        </div>
        <div className="result-section">
          <h3 className="result-subheading">Education</h3>
          <ul className="result-list">
            {educationList.map((edu) => (
              <li key={edu.id}>
                <p className="result-label">{edu.schoolName}</p>
                <p className="result-text">
                  Title of Study: {edu.titleOfStudy}
                </p>
                <p className="result-text">Date: {edu.dateOfStudy}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="result-section">
          <h3 className="result-subheading">Work Experience</h3>
          <ul className="result-list">
            {experienceList.map((exp) => (
              <li key={exp.id}>
                <p className="result-label">{exp.companyName}</p>
                <p className="result-text">Position: {exp.positionTitle}</p>
                <p className="result-text">Main Tasks: {exp.mainTasks}</p>
                <p className="result-text">Date From: {exp.dateFrom}</p>
                <p className="result-text">Date Until: {exp.dateUntil}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ButtonGroup>
        <EditButton onClick={onEdit} />
      </ButtonGroup>
    </div>
  );
}

Result.propTypes = {
  personalInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
  educationList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      schoolName: PropTypes.string,
      titleOfStudy: PropTypes.string,
      dateOfStudy: PropTypes.string,
    })
  ).isRequired,
  experienceList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      companyName: PropTypes.string,
      positionTitle: PropTypes.string,
      mainTasks: PropTypes.string,
      dateFrom: PropTypes.string,
      dateUntil: PropTypes.string,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
};
