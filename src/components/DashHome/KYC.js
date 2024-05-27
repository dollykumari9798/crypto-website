import React, { useState, useEffect } from "react";
import "../../styles/Profile.css";
import { Link } from "react-router-dom";
import logout from "../../images/logout.png";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

const KYC = () => {

  return (
    <div className="kycBody pBody">
      <div className="pfLeft">
        <div className="inputParent">
          <div className="label">Enter Pan Card Number </div>
          <input type="text" className="ProfileTextField" />
        </div>
        <div className="inputParent">
          <div className="label">Enter Adhar/Passport Number</div>
          <input type="text" className="ProfileTextField" />
        </div>
        <div className="inputParent">
          <div className="label">Upload Front side of Adhar/Passport</div>
          <input type="text" className="ProfileTextField" />
        </div>
        <Link className="ProfileBtn" to="/">
          Update Profile
        </Link>
      </div>
      <div className="pMid">
        <div
          style={{ opacity: "0", pointerEvents: "none" }}
          className="inputParent"
        >
          <div className="label">Enter Pan Card Number </div>
          <input type="text" className="ProfileTextField" />
        </div>
        <div className="inputParent">
          <div className="label">Upload Front of Pan Card</div>
          <input type="text" className="ProfileTextField" />
        </div>
        <div className="inputParent">
          <div className="label">Upload Back side of Adhar/Passport</div>
          <input type="text" className="ProfileTextField" />
        </div>
      </div>
      <div className="kycRight">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#eb5e28",
            trailColor: "#fffcf2",
            pathColor: "#eb5e28",
          })}
        />
      </div>
    </div>
  );
};

export default KYC;
