import PropTypes from "prop-types";
import FormSection from "./FormSection";
import Input from "./Input";

export default function PersonalInfoFormSection({
  personalInfo,
  onPersonalInfoChange,
}) {
  const handleChange = (e) => {
    const newPersonalInfo = {
      ...personalInfo,
      [e.target.name]: e.target.value,
    };
    onPersonalInfoChange(newPersonalInfo);
  };

  return (
    <FormSection title="Personal Info">
      <div className="form-control">
        <label className="form-label" htmlFor="firstName">
          First Name:
        </label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          value={personalInfo.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor="lastName">
          Last Name:
        </label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          value={personalInfo.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor="email">
          Email:
        </label>
        <Input
          type="text"
          name="email"
          id="email"
          value={personalInfo.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor="phoneNumber">
          Phone:
        </label>
        <Input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={personalInfo.phoneNumber}
          onChange={handleChange}
        />
      </div>
    </FormSection>
  );
}

PersonalInfoFormSection.propTypes = {
  personalInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
  onPersonalInfoChange: PropTypes.func.isRequired,
};
