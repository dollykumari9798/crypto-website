import React from "react";
import { Link } from "react-router-dom";
import wallet from "../images/wallet.png";
import crypto from "../images/crypto.png";
import rupee from "../images/rupee.png";
import btc from "../images/btc.png";
import eth from "../images/eth.png";
import usdt from "../images/usdt.png";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="hTitle">Services By Us</div>
      <div className="ServiceCardParent">
        <div className="Sc">
          <div className="SCText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem doloribus possimus quidem velit explicabo repudiandae
              aut aliquid sequi beatae eius illum quam non corporis, pariatur
              suscipit ea expedita ipsa mollitia!
            </p>
            <Link className="ServiceBtn" to="/">
              Rechage Now
            </Link>
          </div>
          <div className="STextCover"></div>
          <div className="SCImg">
            <img src={rupee} alt="" className="Scoins" />
            <img src={wallet} alt="" />
          </div>
        </div>
        <div className="Sc rev">
          <div className="SCImg">
            <img src={btc} alt="" className="Scoins" />
            <img src={wallet} alt="" />
          </div>
          <div className="SCText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem doloribus possimus quidem velit explicabo repudiandae
              aut aliquid sequi beatae eius illum quam non corporis, pariatur
              suscipit ea expedita ipsa mollitia!
            </p>
            <Link className="ServiceBtn" to="/">
              Book Ticket
            </Link>
          </div>
          <div className="STextCover"></div>
        </div>
        <div className="Sc">
          <div className="SCText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem doloribus possimus quidem velit explicabo repudiandae
              aut aliquid sequi beatae eius illum quam non corporis, pariatur
              suscipit ea expedita ipsa mollitia!
            </p>
            <Link className="ServiceBtn" to="/">
              Buy Gift Cards
            </Link>
          </div>
          <div className="STextCover" style={{ animationDelay: "2.3s" }}></div>
          <div className="SCImg">
            <img src={eth} alt="" className="Scoins" style={{ animationDelay: "2.2s" }}/>
            <img src={wallet} alt="" />
          </div>
        </div>
        <div className="Sc rev">
          <div className="SCImg">
            <img
              src={usdt}
              alt=""
              className="Scoins"
              style={{ animationDelay: "2.5s" }}
            />
            <img src={wallet} alt="" />
          </div>
          <div className="SCText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem doloribus possimus quidem velit explicabo repudiandae
              aut aliquid sequi beatae eius illum quam non corporis, pariatur
              suscipit ea expedita ipsa mollitia!
            </p>
            <Link
              className="ServiceBtn"
              to="/"
            >
              Exchange Crypto
            </Link>
          </div>
          <div className="STextCover"
              style={{ animationDelay: "2.5s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Services;