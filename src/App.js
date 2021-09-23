import { useState } from "react";

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

  const handlePersonalInfoChange = (data) => {
    console.log("handlePersonalInfoChange:", data);
    setPersonalInfo(data);
  };

  return (
    <div>
      <Header />
      <Main
        personalInfo={personalInfo}
        onPersonalInfoChange={handlePersonalInfoChange}
      />
    </div>
  );
}

export default App;
