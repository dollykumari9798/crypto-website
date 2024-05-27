import React, { useState, useEffect } from "react";
import "../../styles/Profile.css";
import { Link } from "react-router-dom";
import profilePic from "../../images/profilePic.png";
import { FaPencilAlt } from "react-icons/fa";

const Profile = () => {
  // const [activeHome, setActiveHome] = useState("Profile");
  
  // const handleHomeClick = (test) => {
  //   setActiveHome(test);
  // };

  return (
      <div className="pBody">
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
      </div>
  );
};

export default Profile;
