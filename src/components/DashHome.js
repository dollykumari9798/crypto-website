import React, { useState, useEffect } from "react";
import "../styles/Profile.css";
import { Link } from "react-router-dom";
import logout from "../images/logout.png";
import profilePic from "../images/profilePic.png";
import { FaPencilAlt } from "react-icons/fa";
import { homeMenuItems } from "./DashHome/HomeMenuItems";
import Profile from "./DashHome/Profile";
import KYC from "./DashHome/KYC";

const DashHome = (props) => {
  const [activeHome, setActiveHome] = useState("Profile");
  
  const handleHomeClick = (test) => {
    setActiveHome(test);
  };

  return (
    <div className={props.dir?"profile moveR2L":"profile moveL2R"}>
      <ul className="pMenu">
        {homeMenuItems.map((ele, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleHomeClick(ele.item);
                console.log(activeHome);
              }}
              className={ele.item === activeHome?'dashActive':ele.class}
            >
              {ele.item}
            </li>
          );
        })}
      </ul>
      {(()=>{
        switch (activeHome) {
          case "Profile":return(<Profile/>);
          case "KYC":return(<KYC/>);
          // case "Bank Details":return(<Profile/>);
        
          default: return(<p>Under Development</p>);
            break;
        }
      })()}
      <div className="pFooter">
        <Link to="/">
          <img src={logout} alt="" />
        </Link>
      </div>
      {/* <div className="pBody">
        <div className="pfLeft">
          <div className="inputParent">
            <div className="label">Name</div>
            <input type="text" className="ProfileTextField" />
          </div>
          <div className="inputParent">
            <div className="label">Username</div>
            <input type="text" className="ProfileTextField" />
          </div>
          <div className="inputParent">
            <div className="label">Email</div>
            <input type="text" className="ProfileTextField" />
          </div>
          <Link className="ProfileBtn" to="/">
            Update Profile
          </Link>
        </div>
        <div className="pbRight">
          <div className="ppContainer">
            <img src={profilePic} alt="" />
            <input type="file" className="ppIn" />
            <div className="label">
              <FaPencilAlt />
            </div>
          </div>
          <p style={{ margin: "0" }}>Profile Picture</p>
        </div>
      </div> */}
    </div>
  );
};

export default DashHome;
