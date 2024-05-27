import React, { useState, useEffect } from "react";
import { adminDashMenu } from "../components/Admin/AdminDashMenu.js";
import "../styles/AdminDash.css";
import { Link } from "react-router-dom";
import UserItem from "../components/Admin/UserItem.js";
import { userListItems } from "../components/Admin/UserList.js";
const AdminDash = () => {
  const [users, setUsers] = useState([]);
  const [viewTrigger, setViewTrigger] = useState(false);
  const [userDet, setUserDet] = useState({
    Username: "",
    Status: "",
    Wallet: { INR: "", USDT: "", ETH: "", BTC: "" },
    email: "",
    Date_of_Creation: "",
    Name: "",
    Phone_No: "",
    PAN_No: "",
    Last_Login: "",
    Activity: "",
    IpAdress:"",
  });

  const menuClick=(id)=>{
    if(id==1){
      setViewTrigger(false)
    }

  }

  const showDetails=(name)=>{
    setViewTrigger(true)
    users.forEach((ele)=>{
      if(ele.username == name){
          setUserDet({
              Username: ele.username,
              Status: "Active",
              Wallet:{
                  INR: ele.Wallet.INR,
                  USDT: ele.Wallet.USDT,
                  ETH: ele.Wallet.ETH,
                  BTC: ele.Wallet.BTC,
              },
              email: ele.email,
              Date_of_Creation: ele.Date_of_Creation,
              Name: ele.name,
              Phone_No: ele.Phone_No,
              PAN_No: ele.PAN_No,
              Last_Login: ele.Last_Login,
              Activity: ele.Activity,
              IpAdress: ele.IpAdress,
          });
          console.log(ele);
      }
  })

  }

  useEffect(async () => {
    // await fetch("https://www.autofrenzy.in/getUsers", {
    await fetch("http://localhost:5002/getUsers", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    })
    .then((res)=> res.json())
    .then((data)=>setUsers(data))
    .catch((err)=>console.log(err))
  }, []);

  return (
    <div className="adminDashParent">
      <div className="adminNav">
        <h1>Logo</h1>
        {adminDashMenu.map((ele, index) => {
          return (
            <div  className={ele.class} onClick={()=>{menuClick(ele.uniqueId)}}>
              {ele.item}
            </div>
          );
        })}
      </div>
      <div className="adminBody">
        <h1>Admin</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <input
            type="text"
            className="userSearch"
            placeholder="Search user..."
          />
        </div>
        <div className={viewTrigger?"userTable listShow":"userTable"}>
          {users.map((ele) => {
            return (
              <div
                onClick={()=>{showDetails(ele.username)}}
                style={{ textDecoration: "none", color: "initial" }}
              >
                <UserItem username={ele.username} email={ele.email} />
              </div>
            );
          })}
        </div>
        <div className={viewTrigger?"userTable udPadding":"userTable udPadding listShow"}>
          <div className="utSec1">
            <div className="uts1L">
              <h1 className="uUserName">{userDet.Username}</h1>
              <span className="uStatus">Status: {userDet.Status}</span>
            </div>
            <div className="uts1R">
              <p>INR: {userDet.Wallet.INR}</p>
              <p>USDT: {userDet.Wallet.USDT}</p>
              <p>ETH: {userDet.Wallet.ETH}</p>
              <p>BTC: {userDet.Wallet.BTC}</p>
            </div>
          </div>
          <div className="utSec2">
            <div className="uts2LoginDetails">
              <p style={{ marginTop: "0" }}>Login Details</p>
              <div className="uts2ldContent">
                <span>Email: {userDet.email}</span>
                <span>Name: {userDet.Name}</span>
                <span>Date Of Creation: {userDet.Date_of_Creation}</span>
                <span>Phone No: {userDet.Phone_No}</span>
              </div>
            </div>
            <div className="uts2KYC">
              <p>KYC</p>
              <div className="uts2kycContent">
                <span>PAN No: {userDet.PAN_No}</span>
                <span>PAN FRONT</span>
                <span>ADHAR FRONT</span>
                <span>ADHAR BACK</span>
                <Link className="adminBtn" to="/">
                  Approve
                </Link>
              </div>
            </div>
            <div className="uts2LastLogin">
              <p>Last Login</p>
              <div className="uts2llContent">
                <span>Login At: {userDet.Last_Login}</span>
                <span>IP: {userDet.IpAdress}</span>
              </div>
            </div>
            <div className="uts2Activity">
              <p>Activity</p>
            </div>
          </div>
          <div className="utSec3">
            <p>Show more</p>
            <div className="uts3Btns">
              <div className="adminBtn"  onClick={()=>{setViewTrigger(false)}}>
                Back
              </div>
              <Link className="adminBtn" to="/">
                SUSPEND
              </Link>
              <Link className="adminBtn" to="/">
                DEBIT
              </Link>
              <Link className="adminBtn" to="/">
                CREDIT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
