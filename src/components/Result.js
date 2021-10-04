import Button from "./Button";
import "./Result.css";

export default function Result({
  personalInfo,
  education,
  experience,
  onEdit,
}) {
  return (
    <div className="form">
      <h2>CV</h2>
      <div className="result-section">
        <h3 className="result-subheading">Personal Info</h3>
        <p className="result-label">Name</p>
        <p className="result-text">
          {personalInfo.firstName} {personalInfo.lastName}
        </p>
        <p className="result-label">Email</p>
        <p className="result-text">{personalInfo.email}</p>
        <p className="result-label">Phone</p>
        <p className="result-text">{personalInfo.phoneNumber}</p>
      </div>
      <div className="result-section">
        <h3 className="result-subheading">Education</h3>
        <ul className="result-list">
          {education.map((edu) => (
            <li key={edu.id}>
              <p className="result-label">{edu.schoolName}</p>
              <p className="result-text">Title of Study: {edu.titleOfStudy}</p>
              <p className="result-text">Date: {edu.dateOfStudy}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="result-section">
        <h3 className="result-subheading">Work Experience</h3>
        <ul className="result-list">
          {experience.map((exp) => (
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
      <div className="button-group">
        <Button className="btn-edit" type="button" onClick={onEdit}>
          Edit
        </Button>
      </div>
    </div>
  );
}
