import React from "react";
import Wave from "react-wavify";
import "../styles/WhyUs.css";
import wallet from "../images/wallet.png";
import rupee from "../images/rupee.png";

const WhyUs = () => {
  return (
    <div className="why">
      <div className="waveContainer">
        <Wave
          className="waves"
          fill="#252422"
          opacity="1"
          paused={false}
          options={{
            height: 75,
            amplitude: 40,
            speed: 0.3,
            points: 4,
          }}
        />
      </div>
      <div className="whyParent">
        <div className="hTitle">Why Us?</div>
        <div className="Sc">
          <div className="SCText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem doloribus possimus quidem velit explicabo repudiandae
              aut aliquid sequi beatae eius illum quam non corporis, pariatur
              suscipit ea expedita ipsa mollitia!
            </p>
          </div>
          <div
            className="STextCover"
            style={{ background: "#252422", animationDelay: "3s" }}
          ></div>
          <div className="SCImg">
            <img
              src={rupee}
              alt=""
              className="Scoins"
              style={{ animationDelay: "3s" }}
            />
            <img src={wallet} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
