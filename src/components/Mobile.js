import React from "react";
import "../styles/Mobile.css";
import { FaBars, FaPhone, FaRupeeSign } from "react-icons/fa";
import rupee from "../images/rupee.png";
import btc from "../images/btc.png";
import eth from "../images/eth.png";
import usdt from "../images/usdt.png";
import qr from "../images/qr.png";

const Mobile = () => {
  return (
    <div className="mobile">
      <div className="hTitle">Access everything under a few clicks</div>
      <div className="mvParent">
        <div className="mCard Cl">
          <div className="mcHeader">
            <span>LOGO</span>
            <span>
              <FaBars />
            </span>
          </div>
          <div className="mcBody">
            <p>Mobile Recharge </p>
            <div className="mbField">
              <div
                className="mfIcon"
                style={{
                  transform: "rotateY(180deg) ",
                }}
              >
                <FaPhone />
              </div>
              <div className="mfText">
                <span>89749XXXXX</span>
              </div>
            </div>
            <div className="mbField">
              <div className="mfIcon">
                <FaRupeeSign />
              </div>
              <div className="mfText">
                <span>89749XXXXX</span>
              </div>
            </div>
            <div className="mbBtn">Recharge</div>
          </div>
        </div>
        <div className="mCard Cc">
          <div className="mcHeader">
            <span>LOGO</span>
            <span>
              <FaBars />
            </span>
          </div>
          <div className="mcBody">
            <div className="mbField" style={{ margin: "1.7rem 0" }}>
              <div className="mc2">
                <p>Current Balance</p>
                <p>INR: ₹ 45,000</p>
                <p>BTC: ₿ 0.025</p>
              </div>
            </div>
            <div className="mbField">
              <div className="mfIcon">
                <img src={btc} alt="" className="c2Icon" />
              </div>
              <div className="mfText">
                <span className="c2Text">+ 0.0004556</span>
              </div>
            </div>
            <div className="mbField">
              <div className="mfIcon">
                <img src={eth} alt="" className="c2Icon" />
              </div>
              <div className="mfText">
                <span className="c2Text">+ 0.09626</span>
              </div>
            </div>
            <div className="mbField">
              <div className="mfIcon">
                <img src={usdt} alt="" className="c2Icon" />
              </div>
              <div className="mfText">
                <span className="c2Text">+ 0.334325</span>
              </div>
            </div>
            <div className="mbField">
              <div className="mfIcon">
                <img src={rupee} alt="" className="c2Icon" />
              </div>
              <div className="mfText">
                <span className="c2Text">+ 12,000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mCard Cr">
          <div className="mcHeader">
            <span>LOGO</span>
            <span>
              <FaBars />
            </span>
          </div>
          <div className="mcBody">
            <div className="mbField" style={{ margin: "1.7rem 0" }}>
              <div className="mc2">
                <p>Wallet Balance</p>
                <p className="c2Text">₹ 45,000</p>
              </div>
            </div>
            <p className="c3Text">Scan to receive payment</p>
            <div className="mbField qrParent">
              <img src={qr} alt="" className="qr"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
