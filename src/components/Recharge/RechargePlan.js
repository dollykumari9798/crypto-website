import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/RechargePlan.css";

const RechargePlan = () => {
  return (
    <div className="rechargePlan">
      <p>
        Select your plan, see the price in selected crypto and recharge in
        seconds!
      </p>
      <div className="rpBody">
        <div className="selector">
          <p>SELECT NETWORK</p>
          <p>
            <FaChevronDown />
          </p>
        </div>
        <div className="numberField">
          <select name="" className="countrySelector">
            <option selected value="0">
              IN
            </option>
            <option value="1">US</option>
            <option value="2">UK</option>
            <option value="3">BR</option>
          </select>
          <input type="number" className="rechargeNum" min="0" />
        </div>
        <Link className="rpBTN" to="/">
          Rechage Now
        </Link>
      </div>
    </div>
  );
};

export default RechargePlan;
