import { useState } from "react";
import uniqid from "uniqid";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [education, setEducation] = useState([]);
  const [isSubmitted, setSubmitted] = useState(false);

  const handlePersonalInfoChange = (data) => {
    console.log("handlePersonalInfoChange:", data);
    setPersonalInfo(data);
  };

  const handleEducationChange = (data) => {
    setEducation(data);
  };

  const handleEducationAdd = () => {
    const newEducation = [
      ...education,
      { id: uniqid(), schoolName: "", titleOfStudy: "", dateOfStudy: "" },
    ];
    setEducation(newEducation);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <Header />
      <Main
        personalInfo={personalInfo}
        onPersonalInfoChange={handlePersonalInfoChange}
        education={education}
        onEducationChange={handleEducationChange}
        onEducationAdd={handleEducationAdd}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
