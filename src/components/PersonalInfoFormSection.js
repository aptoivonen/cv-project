import PropTypes from "prop-types";

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
    <div>
      <h2 className="form-heading">Personal Info</h2>
      <div className="form-control">
        <label className="form-label" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="form-input"
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
        <input
          className="form-input"
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
        <input
          className="form-input"
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
        <input
          className="form-input"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={personalInfo.phoneNumber}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

PersonalInfoFormSection.propTypes = {
  personalInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
};
