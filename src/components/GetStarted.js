import React from "react";
import "../styles/GetingStarted.css";
import Wave from "react-wavify";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="GetStarted">
      <div className="hTitle" style={{ padding: "7rem 10rem 3rem 10rem" }}>
        Get Started Now
      </div>
      <div className="gsParent">
        <div className="gsText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cum
          quaerat iste. Quo optio numquam laudantium doloribus dolor! Nulla
          voluptatibus vero dolorum, voluptatem eius praesentium non fugiat amet
          voluptatum assumenda!
        </div>
        <div className="gsBtnParent">
          <Link className="ServiceBtn" to="/login">
            LOGIN
          </Link>
          <Link className="ServiceBtn" to="/register">
            SIGN UP
          </Link>
        </div>
      </div>
      <div className="waveContainer">
        <Wave
          className="waves"
          fill="#f3eee2"
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
    </div>
  );
};

export default GetStarted;
