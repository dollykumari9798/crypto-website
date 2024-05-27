import React from "react";
import gsap from "gsap";
// import Navbar from "./Navbar";
import "../styles/Sec1.css";
import crypto from "../images/crypto.png";
import bank from "../images/bank.png";
import Wave from "react-wavify";
import Navbar from "./Navbar";
import { useRef, useEffect } from "react";
import {
  Animator,
  Animation,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

const Sec1 = () => {
  // const c1 = useRef(null);
  // useEffect(() => {
  //   const el = c1.current;
  //   gsap.fromTo(
  //     el,
  //     { translateY: 0 },
  //     {
  //       translateY: 750,
  //       duration: 10,
  //       scrollTrigger: {
  //         trigger: ".about",
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className="Sec1">
      <Navbar />
      <div className="LargeCircle"></div>
      <div className="SmallCircle"></div>
      <div className="hContent">
        <div className="hText">
          <h1 className="hTitle">Heading Text</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            tempore tenetur beatae sint sed. Consectetur autem at tempora ab
            officiis aliquid quis quidem voluptatem iste modi obcaecati dolor,
            facere voluptas?
          </span>
        </div>
        <div className="hImg">
          <Animator animation={MoveOut(0, 200)}>
            <span
              style={{
                fontSize: "30px",
                position: "relative",
                top: "8rem",
                right: "12rem",
              }}
            >
              <img className="coins" src={crypto} alt="" />
            </span>
          </Animator>

          {/* <img className="coins" src={crypto} alt="" ref={c1} /> */}
          <img src={bank} alt="" style={{ zIndex: "2" }} />
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

export default Sec1;
