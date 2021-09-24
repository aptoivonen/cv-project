import Form from "./Form";
import "./Main.css";

export default function Main({
  personalInfo,
  onPersonalInfoChange,
  isSubmitted,
  onSubmit,
}) {
  return (
    <main className="main">
      <div className="container">
        {isSubmitted ? (
          <div>
            <h2>Submitted</h2>
            <p>{personalInfo.firstName}</p>
          </div>
        ) : (
          <Form
            personalInfo={personalInfo}
            onPersonalInfoChange={onPersonalInfoChange}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </main>
  );
}
