import React from "react";
import shelf1 from "../images/shelf1.png";
import shelf2 from "../images/shelf2.png";
import shelf3 from "../images/shelf3.png";
import "../styles/DashGift.css";
import amazonCard from "../images/amazonCard.png";

const DashGift = (props) => {
  return (
    <div className={props.dir?"dbCard dashGift moveR2L":"dbCard dashGift moveL2R"}>
      <div className="popularSec shelf">
        <img className="shelfImg" src={shelf1} alt="" />
        {/* <p className="gcLabel">POPULAR</p> */}
        <img className="giftCard g1" src={amazonCard} alt="" />
        <img className="giftCard g1" src={amazonCard} alt="" />
        <img className="giftCard g1" src={amazonCard} alt="" />
      </div>
      <div className="preferredSec shelf">
        <img className="shelfImg" src={shelf2} alt="" />
        {/* <p className="gcLabel">PREFERRED</p> */}
        <img className="giftCard g1" src={amazonCard} alt="" />
        <img className="giftCard g1" src={amazonCard} alt="" />
        <img className="giftCard g1" src={amazonCard} alt="" />
      </div>
      <div className="otherSec shelf">
        <img className="shelfImg" src={shelf3} alt="" />
        {/* <p className="gcLabel">OTHERS</p> */}
        <img className="giftCard g1" src={amazonCard} alt="" />
        <img className="giftCard g1" src={amazonCard} alt="" />
        <img className="giftCard g1" src={amazonCard} alt="" />
      </div>
    </div>
  );
};

export default DashGift;
