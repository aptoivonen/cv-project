import "./Main.css";
import { useState } from "react";
import uniqid from "uniqid";
import Form from "./Form";
import Result from "./Result";
import Container from "./Container";

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

  const handleEdit = () => {
    setSubmitted(false);
  };

  return (
    <main className="main">
      <Container>
        {isSubmitted ? (
          <Result
            personalInfo={personalInfo}
            educationList={education}
            experienceList={experience}
            onEdit={handleEdit}
          />
        ) : (
          <Form
            personalInfo={personalInfo}
            onPersonalInfoChange={handlePersonalInfoChange}
            educationList={education}
            onEducationChange={handleEducationChange}
            onEducationAdd={handleEducationAdd}
            onEducationDelete={handleEducationDelete}
            experienceList={experience}
            onExperienceChange={handleExperienceChange}
            onExperienceAdd={handleExperienceAdd}
            onExperienceDelete={handleExperienceDelete}
            onSubmit={handleSubmit}
          />
        )}
      </Container>
    </main>
  );
}
