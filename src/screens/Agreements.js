import React, { useState, useEffect } from "react";
import { ProgressBarItem } from "../components/ProgressBar";
import Modal from "react-bootstrap/Modal";
import { Button } from "../components/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../style/Agreement.css";

export default function Agreements(props) {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [agreement1, setAgreement1] = useState(false);
  const [agreement2, setAgreement2] = useState(false);
  const [value, setValue] = useState(66);

  const dob = localStorage.getItem("dob");
  const userData = localStorage.getItem("frmDetails");

  useEffect(() => {
    if (undefined == dob) {
      history.push("/");
    }
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 34;
        if (newValue >= 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 100);
  }, []);
  

  const finish = async () => {
    if (agreement1 && agreement2) {
      let user = JSON.parse(userData);

      let data = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        agreement1: agreement1,
        agreement2: agreement2,
      };

      let url = "https://5f79819fe402340016f93139.mockapi.io/api/user"; // API Maximum limit seems to be reached. Always returning 400
      await axios
        .post(url, data)
        .then((res) => {
          localStorage.clear();
          history.push("/onboard-test.moneylion.com/welcome");
        })
        .catch((err) => {
          handleShow();
        });
    } else {
      alert("Agreements must be checked");
    }
  };

  return (
    <div>
      <ProgressBarItem number={value} variant={"PROGRESS-BAR-COLOR"} />
      <div className="main-container">
        <div className="container">
          <h1>One Last Step</h1>
          <div>
            <input
              type="checkbox"
              checked={agreement1}
              onChange={() => setAgreement1(!agreement1)}
              className="checkbox-input"
            />
            <label className="form-label">I agree to the</label>
            <p className="agreement-label">
              {" "}
              Electronic Transaction E-sign Consent{" "}
            </p>
          </div>
          <div>
            <input
              type="checkbox"
              checked={agreement2}
              onChange={() => setAgreement2(!agreement2)}
              className="checkbox-input"
            />
            <label className="form-label">
              I agree to the following agreements
            </label>
            <p className="agreement-label">
              Privacy notice <br /> Terms and conditions <br /> Membership
              agreement
            </p>
          </div>
          <Button onClick={finish}>Finish</Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>Request Failed. Try again</Modal.Body>
        <Modal.Footer>
          <Button buttonSize={"btn--small"} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
