import React, { useState, useEffect } from "react";
import { menuItems } from "../components/DashMenu";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "../styles/Dashboard.css";
import profilePic from "../images/profilePic.png";
import btcCard from "../images/btcCard.png";
import usdtCard from "../images/usdtCard.png";
import ethCard from "../images/ethCard.png";
import rsCard from "../images/rsCard.png";
import DashRecharge from "../components/DashRecharge";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import DashGift from "../components/DashGift";
import RechargePlan from "../components/Recharge/RechargePlan";
import DashHome from "../components/DashHome";
import Support from "../components/Support";

const Dashboard = () => {
  const navigate = useNavigate();
  const [menuScreen, setMenuScreen] = useState("Home");
  const [inDir, setInDir] = useState(false);
  const [currDash, setCurrDash] = useState(0);

  const assets = [
    {
      val: "0.021463",
      bg: btcCard,
    },
    {
      val: "0.021463",
      bg: rsCard,
    },
    {
      val: "0.021463",
      bg: usdtCard,
    },
    {
      val: "0.021463",
      bg: ethCard,
    },
  ];

  const handleMenuClick = async (text, num) => {
    setMenuScreen(text);
    if(currDash<=num){
      setInDir(true);
      setCurrDash(num);
    }else{
      setInDir(false);
      setCurrDash(num);
    }
  };

  return (
    <div className="dashboard">
      <div className="Dnav">
        <div className="logo">LOGO</div>
        <div className="heading">Dashboard</div>
        <div className="user">
          <img src={profilePic} className="userImg" alt="" />
          <p>Keith Ray</p>
        </div>
      </div>
      <div className="Dbody">
        <ul className="dbMenu">
          {menuItems.map((ele, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleMenuClick(ele.item, ele.uniqueId);
                }}
                className={ele.item === menuScreen ? "activeDbMenu" : ele.class}
              >
                {ele.item}
              </li>
            );
          })}
        </ul>
        <div className="dbHolder">
          {(() => {
            switch (menuScreen) {
              case "Home": return(<DashHome dir={inDir}/>);
              case "Recharge": return(<DashRecharge dir={inDir}/>);
              case "Gift Cards": return(<DashGift dir={inDir}/>);
              case "Support": return(<Support dir={inDir}/>);

              default:return(<p>Under Development</p>);
            }
          })()}
        </div>
        <div className="dbAssets">
          <h1>Assests</h1>
          <div className="Uparrow">
            <FaChevronUp />
          </div>
          <div className="cardParent">
            {assets.map((element) => {
              return (
                <div className="btcCard Acards">
                  <span className="cardVal">{element.val}</span>
                  <img src={element.bg} alt="" />
                </div>
              );
            })}
          </div>
          <div className="Uparrow">
            <FaChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
