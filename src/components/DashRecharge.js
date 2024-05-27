import React from "react";
import "../styles/DashRecharge.css";
import phone from "../images/phone.png";
import btcFloater from "../images/btcFloater.png";
import rsFloater from "../images/rsFloater.png";
import bill from "../images/bill.png";
import { Link } from "react-router-dom";

const DashRecharge = (props) => {
  return (
    <div
      className={
        props.dir
          ? "dbCard dashRecharge moveR2L"
          : "dbCard dashRecharge moveL2R"
      }
    >
      <p>
        Recharge prepaid mobile phones or pay your postpaid bill with supported
        cryptocurrencies
      </p>
      <div className="dcContainer">
        <div className="prepaid">
          <div className="images">
            <img src={phone} alt="" />
            <img className="floaters f2" src={btcFloater} alt="" />
            <img className="floaters f3" src={rsFloater} alt="" />
            <img className="floaters f4" src={btcFloater} alt="" />
          </div>
          <Link className="ServiceBtn" to="/">
            Prepaid
          </Link>
        </div>
        <div className="postpaid">
          <div className="images">
            <img src={bill} alt="" />
            <img className="floaters f2" src={btcFloater} alt="" />
            <img className="floaters f3" src={rsFloater} alt="" />
            <img className="floaters f4" src={btcFloater} alt="" />
          </div>
          <Link className="ServiceBtn" to="/">
            Postpaid
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashRecharge;
