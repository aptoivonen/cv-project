import Form from "./Form";
import "./Main.css";

export default function Main({ personalInfo, onPersonalInfoChange }) {
  return (
    <main className="main">
      <div className="container">
        <Form
          personalInfo={personalInfo}
          onPersonalInfoChange={onPersonalInfoChange}
        />
      </div>
    </main>
  );
}
