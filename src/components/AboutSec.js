import React, { useState, useRef, useEffect } from "react";
import "../styles/About.css";
import wallet from "../images/wallet.png";
import crypto from "../images/crypto.png";
import Wave from "react-wavify";
import { Parallax } from "react-scroll-parallax";
// import gsap from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger);

const AboutSec = () => {
  // const [visibility, setVisibility] = useState(false);
  // const ABref = useRef(null);
  // useEffect(()=>{
  //   const ABel = ABref.current;
  //   gsap.fromTo('.aboutBody',{translateX:400},{translateX:0})
  // },[])
  return (
    <div className="aboutBody">
      {/* <div className="abCircle"></div> */}
      <div
        className="hTitle"
        style={{
          padding: "0 0 2rem 10rem ",
        }}
      >
        About Us
      </div>
      <div className="abContent">
        <div className="abImg">
          {/* <Parallax translateY={[-70, 70]} translateX={[30, -30]}> */}
            <img src={crypto} alt="" className="Abcoin" />
          {/* </Parallax> */}
          <img src={wallet} alt="" />
        </div>
        <div className="abText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sit,
          quam optio molestias assumenda voluptatibus pariatur eveniet
          laudantium dignissimos tempora quidem, aut laborum error. Veritatis ab
          sit dolorem recusandae architecto. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Nam voluptates, ab, nihil dolores
          soluta reprehenderit aut, facere error repellat quo nostrum earum!
          Similique natus doloribus repellat! Quam recusandae accusamus quas?
        </div>
        <div className="abTextCover"></div>
      </div>
      <div className="slant"></div>
    </div>
  );
};

export default AboutSec;
