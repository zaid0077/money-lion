import React, { useEffect, useState } from "react";
import { ProgressBarItem } from "../components/ProgressBar";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Welcome() {
  const history = useHistory();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("frmDetails") && localStorage.getItem("dob")) {
      history.push("/onboard-test.moneylion.com/agreement");
    } else if (localStorage.getItem("frmDetails")) {
      history.push("/onboard-test.moneylion.com/dob");
    }
  }, []);

  return (
    <div>
      <ProgressBarItem number={value} variant={"PROGRESS-BAR-COLOR"} />
      <div className="main-container">
        <div className="container">
          <h1 className="header-text"> Banking that gives you more </h1>
          <p>
            A lot more. Like your paycheck up to two days early<sup>1</sup> with
            RoarMoney℠ — <br /> plus easy ways to borrow, save, invest, and
            earn. All in one app.
          </p>
          <Link to="/onboard-test.moneylion.com/personalDetails">
            <div className="btn-container">
              <Button>Get Started</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
