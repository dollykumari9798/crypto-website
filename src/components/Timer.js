import React from "react";
import '../styles/Timer.css';
import Wave from "react-wavify";
import timer from '../images/timer.png'

const Timer = () => {
  return (
    <div className="timer">
      <div className="tContent">
        <div className="tTextParent">
            <p>Providing 99.99% Average Uptime Of All Services And Runtime Faster Than Ever Seen</p>
        </div>
        <div className="tDiagram">
            <img src={timer} alt=""/>
        </div>
      </div>
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
    </div>
  );
};

export default Timer;
