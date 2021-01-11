import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { ProgressBarItem } from "../components/ProgressBar";

export default function PersonalDetails() {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState(0);
  const [firstNameErr, setFirstNameErr] = useState({});
  const [lastNameErr, setLastNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 33;
        if (newValue === 33 || newValue >= 33) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 100);
  }, []);

  const nextStep = (e) => {
    e.preventDefault();

    const isValid = formValidation();

    if (isValid) {
      const frmdetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };

      localStorage.setItem("frmDetails", JSON.stringify(frmdetails));
      let path = `/onboard-test.moneylion.com/dob`;
      history.push({
        pathname: path,
        // data: frmdetails,           // Storing Data in local storage for retrievals as we have to check for drop off. Instead of passing data in the history object like this.
      });
    }
  };

  // Custom Validations. Can be replaced by Formik and Yup Libraries

  const formValidation = () => {
    const firstNameErr = {};
    const lastNameErr = {};
    const emailErr = {};
    let isValid = true;

    if (firstName.trim().length < 1) {
      firstNameErr.message = "First Name Field is required";
      isValid = false;
    }

    if (lastName.trim().length < 1) {
      lastNameErr.message = "Last Name Field is required";
      isValid = false;
    }

    if (email.trim().length < 1) {
      emailErr.message = "Email Field is required";
      isValid = false;
    }

    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    setEmailErr(emailErr);
    return isValid;
  };

  return (
    <div>
      <ProgressBarItem number={value} variant={"PROGRESS-BAR-COLOR"} />
      <div className="main-container">
        <form className="container">
          <h1 className="header-text">create your account</h1>
          <div>
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              className="form-input"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {Object.keys(firstNameErr).map((key) => {
              return (
                <div
                  key={firstNameErr}
                  style={{ color: "red", fontSize: "14px" }}
                >
                  {" "}
                  {firstNameErr[key]}
                </div>
              );
            })}
          </div>
          <div>
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              className="form-input"
              placeholder="Enter your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {Object.keys(lastNameErr).map((key) => {
              return (
                <div key={lastNameErr} style={{ color: "red" }}>
                  {" "}
                  {lastNameErr[key]}
                </div>
              );
            })}
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className="form-input"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {Object.keys(emailErr).map((key) => {
              return (
                <div key={emailErr} style={{ color: "red" }}>
                  {" "}
                  {emailErr[key]}
                </div>
              );
            })}
          </div>
          <Button onClick={nextStep}>Continue</Button>
        </form>
      </div>
    </div>
  );
}
