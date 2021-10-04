export default function Result({ personalInfo, education, experience }) {
  return (
    <div>
      <h2>Submitted</h2>
      <h3>Personal Info:</h3>
      <p>
        {personalInfo.firstName} {personalInfo.lastName}
      </p>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phoneNumber}</p>
      <h3>Education:</h3>
      <ul>
        {education.map((edu) => (
          <li key={edu.id}>
            <p>{edu.schoolName}</p>
            <p>{edu.titleOfStudy}</p>
            <p>{edu.dateOfStudy}</p>
          </li>
        ))}
      </ul>
      <h3>Work Experience:</h3>
      <ul>
        {experience.map((exp) => (
          <li key={exp.id}>
            <p>{exp.companyName}</p>
            <p>{exp.positionTitle}</p>
            <p>{exp.mainTasks}</p>
            <p>{exp.dateFrom}</p>
            <p>{exp.dateUntil}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
