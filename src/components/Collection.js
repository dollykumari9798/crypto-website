import React from "react";
import "../styles/Collection.css";
import Wave from "react-wavify";
import Typewriter from "typewriter-effect";

const Collection = () => {
  return (
    <div className="collection">
      <div className="CollParent">
        <div className="shapes">
          <div className="circle c1"></div>
          <div className="circle c2"></div>
          <div className="circle c3"></div>
          <div className="triangle t1"></div>
          <div className="triangle t2"></div>
          <div className="triangle t3"></div>
        </div>
        <div className="text">
          <Typewriter
            options={{
              strings: ["0% Fees And Cash Back On All Services You Use"],
              autoStart: true,
              loop: true,
            }}
          />
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

export default Collection;
