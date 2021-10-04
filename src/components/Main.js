import { useState } from "react";
import uniqid from "uniqid";
import Form from "./Form";
import Result from "./Result";
import "./Main.css";

export default function Main() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [isSubmitted, setSubmitted] = useState(false);

  const handlePersonalInfoChange = (data) => {
    setPersonalInfo(data);
  };

  const handleEducationChange = (id, name, value) => {
    const newEducation = education.map((edu) =>
      edu.id === id
        ? {
            ...edu,
            [name]: value,
          }
        : edu
    );
    setEducation(newEducation);
  };

  const handleEducationAdd = () => {
    const newEducation = [
      ...education,
      { id: uniqid(), schoolName: "", titleOfStudy: "", dateOfStudy: "" },
    ];
    setEducation(newEducation);
  };

  const handleEducationDelete = (id) => {
    const newEducation = education.filter((edu) => edu.id !== id);
    setEducation(newEducation);
  };

  const handleExperienceChange = (id, name, value) => {
    const newExperience = experience.map((exp) =>
      exp.id === id
        ? {
            ...exp,
            [name]: value,
          }
        : exp
    );
    setExperience(newExperience);
  };

  const handleExperienceAdd = () => {
    const newExperience = [
      ...experience,
      {
        id: uniqid(),
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        dateFrom: "",
        dateUntil: "",
      },
    ];
    setExperience(newExperience);
  };

  const handleExperienceDelete = (id) => {
    const newExperience = experience.filter((exp) => exp.id !== id);
    setExperience(newExperience);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main className="main">
      <div className="container">
        {isSubmitted ? (
          <Result
            personalInfo={personalInfo}
            education={education}
            experience={experience}
          />
        ) : (
          <Form
            personalInfo={personalInfo}
            onPersonalInfoChange={handlePersonalInfoChange}
            education={education}
            onEducationChange={handleEducationChange}
            onEducationAdd={handleEducationAdd}
            onEducationDelete={handleEducationDelete}
            onExperienceChange={handleExperienceChange}
            onExperienceAdd={handleExperienceAdd}
            onExperienceDelete={handleExperienceDelete}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </main>
  );
}
