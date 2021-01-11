import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { ProgressBarItem } from "../components/ProgressBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

export default function Dob() {
  const history = useHistory();

  const [dob, setDob] = useState("");
  const [value, setValue] = useState(33);
  const [dobErr, setDobErr] = useState({});

  const userDetails = localStorage.getItem("frmDetails");

  useEffect(() => {
    if (undefined === userDetails) {
      history.push("/");
    }
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 33;
        if (newValue === 66 || newValue >= 66) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 100);
  }, []);

  const nextStep = () => {
    // let data = {
    //   userDetails: JSON.parse(userDetails),
    //   dob: dob,
    // };
    const isValid = formValidation();
    if (isValid) {
    localStorage.setItem("dob", dob);
    let path = "/onboard-test.moneylion.com/agreement";
    history.push({
      pathname: path,
      // data: data,
    });
  }
  };

  const formValidation = () => {
    const dobErr = {};
    let isValid = true;
    if (Object.prototype.toString.call(dob) !== "[object Date]") {
      dobErr.message = "DOB Field is required and must be in above format";
      isValid = false;
    }

    setDobErr(dobErr);
    return isValid;
  };

  return (
    <div>
      <ProgressBarItem number={value} variant={"PROGRESS-BAR-COLOR"} />
      <div className="main-container">
        <div className="container">
          <h1 className="header-text">what's your date of birth</h1>
          <label htmlFor="firstname" className="form-label">
            Your Birthday
          </label>
          <div>
            <DatePicker
              minDate={new Date("01-01-1950")}
              maxDate={new Date("01-01-2005")}
              className="form-input-date"
              selected={dob}
              placeholderText={"DD-MM-YYYY"}
              onChange={(date) => setDob(date)}
            />
            {Object.keys(dobErr).map((key) => {
              return (
                <div
                  key={dobErr}
                  style={{ color: "red", fontSize: "14px" }}
                >
                  {" "}
                  {dobErr[key]}
                </div>
              );
            })}
          </div>
          <Button onClick={nextStep}>Continue</Button>
        </div>
      </div>
    </div>
  );
}
