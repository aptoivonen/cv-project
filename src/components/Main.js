import Form from "./Form";
import Result from "./Result";
import "./Main.css";

export default function Main({
  personalInfo,
  onPersonalInfoChange,
  education,
  onEducationChange,
  onEducationAdd,
  onEducationDelete,
  isSubmitted,
  onSubmit,
}) {
  return (
    <main className="main">
      <div className="container">
        {isSubmitted ? (
          <Result personalInfo={personalInfo} education={education} />
        ) : (
          <Form
            personalInfo={personalInfo}
            onPersonalInfoChange={onPersonalInfoChange}
            education={education}
            onEducationChange={onEducationChange}
            onEducationAdd={onEducationAdd}
            onEducationDelete={onEducationDelete}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </main>
  );
}
