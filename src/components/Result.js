export default function Result({ personalInfo, education }) {
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
    </div>
  );
}
