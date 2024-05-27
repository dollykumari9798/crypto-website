import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import "../styles/SignUp.css";
import {
  FaGoogle,
  FaUser,
  FaLock,
  FaEnvelope,
  FaApple,
  FaTimes,
} from "react-icons/fa";
import { Alert, IconButton, Collapse } from "@mui/material/";
import signUp from "../images/signUp.png";
import login from "../images/login.png";

Axios.defaults.withCredentials = true;

const SignPage = (props) => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState(props.checkInVal); //SignUP or SignIn
  const [open, setOpen] = useState(false); //error dialog
  const [popup, setPopup] = useState(false); //validation popup
  const [pwd, setPwd] = useState(false); //forgetpassword
  const [valid, setValid] = useState(false); //check validity
  const [Rvalues, setRvalues] = React.useState({
    name: "",
    username:'',
    email: "",
    password: "",
    Wallet: { INR: "", USDT: "", ETH: "", BTC: "" },
    Date_of_Creation: "",
    Name: "",
    Phone_No: "",
    PAN_No: "",
    Last_Login: "",
    Activity: "",
    IpAddress:"",
  });
  const [message, setMessage] = useState(""); //error message
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [Lvalues, setLvalues] = React.useState({
    email: "",
    password: "",
  });

  //getIPofDevice
  const getIp = async()=>{
    await fetch("https://api.ipify.org/",{
      method:"GET",
      headers:{
        "Content-type": "application/json; charset = UTF-8",
      }
    })
    // .then((res)=>{setRvalues({...Rvalues,IpAddress:res})})
    .then((res)=>console.log(res))
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
  }

  useEffect(() => {
    getIp()
  }, [])
  


  //forget password popup
  const handleFgpwd = () => {
    setPwd(!pwd);
  };

  //sending reset link
  const sendLink = () => {};
  //reseting error message on editing fields
  useEffect(() => {
    setOpen(false);
  }, [Rvalues, Lvalues]);

  //emptying fields while switching
  const handleSwitch = () => {
    setRvalues({
      name: "",
      email: "",
      password: "",
    });
    setLvalues({
      email: "",
      password: "",
    });
    setValid(false);
    setCheckIn(!checkIn);
  };

  //mail validation popup for signup
  const handlePopup = (e) => {
    if (handleCheck()) {
      setPopup(!popup);
    }
  };

  //form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkIn && valid) {
      console.log("details registered successfully");
      // getIp()
      console.log(Rvalues);
      await fetch("http://localhost:5002/register", {
        method: "POST",
        body: JSON.stringify(Rvalues),
        headers: {
          "Content-type": "application/json; charset = UTF-8",
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        setValid(false)
        setPopup(false)
      setRvalues({
        name: "",
        username:'',
        email: "",
        password: "",
        Wallet: { INR: "", USDT: "", ETH: "", BTC: "" },
        Date_of_Creation: "",
        Name: "",
        Phone_No: "",
        PAN_No: "",
        Last_Login: "",
        Activity: "",
        IpAddress:"",
      })
      
    
    } else if (checkIn && !valid) {
      handlePopup();
    } else if (!checkIn && handleCheck()) {
      await fetch("http://localhost:5002/login", {
        method: "POST",
        body: JSON.stringify(Lvalues),
        headers: {
          "Content-type": "application/json; charset = UTF-8",
        },
      })
        .then((res) => {
          // setOpen(true);
          let resCode = res.status;
          if (resCode == 200) {
            setMessage("User Logged in Successfully");
            localStorage.setItem("cred",JSON.stringify(res.body))
            setTimeout(() => {
              navigate("/dashboard");
              console.log(localStorage);
            }, 1000);
          } else if (resCode == 401) {
            setOpen(true);
            setMessage("Incorrect Password");
          } else if (resCode == 402) {
            setOpen(true);
            setMessage("User not registered");
            setTimeout(() => {
              setCheckIn(true)
              setOpen(false)
            }, 1000);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  //check for email validity
  const validate = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers:{
        'User-Agent': 'PostmanRuntime/7.29.2',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    }
    };
    
    // await fetch(`https://tired-pens-turn-103-127-146-106.loca.lt/email_otp/priyanshu1843@gmail.com`, requestOptions)
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
    setValid(true);
    setPopup(!popup);
  };

  //filling in the details
  const handleDetails = (prop) => (event) => {
    if (checkIn) {
      setRvalues({ ...Rvalues, [prop]: event.target.value });
    } else {
      setLvalues({ ...Lvalues, [prop]: event.target.value });
    }
  };

  //email correctness verification
  const mailCheck = () => {
    if (checkIn) {
      if (Rvalues.email.match(mailformat)) {
        return true;
      } else {
        return false;
      }
    } else {
      if (Lvalues.email.match(mailformat)) {
        return true;
      } else {
        return false;
      }
    }
  };

  //checking for correct data in all fields
  const handleCheck = () => {
    if (checkIn) {
      if (Rvalues.name == "" || Rvalues.email == "" || Rvalues.password == "") {
        setOpen(true);
        setMessage("Please fill all the fields");
        return false;
      } else if (!mailCheck()) {
        setOpen(true);
        setMessage("Please enter a valid email");
        return false;
      }
      return true;
    } else {
      if (Lvalues.email == "" || Lvalues.password == "") {
        setOpen(true);
        setMessage("Please fill all the fields");
        return false;
      } else if (!mailCheck()) {
        setOpen(true);
        setMessage("Please enter a valid email");
        return false;
      }
      return true;
    }
  };

  return (
    <div className="signPage">
      <div className={checkIn ? "container sign-up-mode" : "container"}>
        <div className="forms-container">
          <div className="signin-signup">
            {/* SignIn form */}
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i>
                  <FaEnvelope />
                </i>
                <input
                  type="text"
                  placeholder="Email"
                  value={Lvalues.email}
                  onChange={handleDetails("email")}
                />
              </div>
              <div className="input-field">
                <i>
                  <FaLock />
                </i>

                <input
                  type="password"
                  placeholder="Password"
                  value={Lvalues.password}
                  onChange={handleDetails("password")}
                />
              </div>
              <span
                className="resend fgpwd"
                style={{ alignSelf: "flex-end", marginRight: "20%" }}
                onClick={handleFgpwd}
              >
                Forget Password?
              </span>
              <Collapse in={open}>
                <Alert
                  severity="error"
                  style={{
                    background: "#ffc6c6",
                    color: "#fff",
                  }}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <FaTimes />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  {message}
                </Alert>
              </Collapse>
              <input
                type="submit"
                value="Login"
                className="btn solid"
                onClick={handleSubmit}
              />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <Link className="social-icon" to="#">
                  <FaGoogle />
                </Link>
                <Link className="social-icon" to="#">
                  <FaApple />
                </Link>
              </div>
            </form>

            {/* SignUp form */}
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i>
                  <FaUser />
                </i>
                <input
                  type="text"
                  placeholder="Name"
                  value={Rvalues.name}
                  onChange={handleDetails("name")}
                />
              </div>
              <div className="input-field">
                <i>
                  <FaEnvelope />
                </i>
                <input
                  type="email"
                  placeholder="Email"
                  value={Rvalues.email}
                  onChange={handleDetails("email")}
                />
              </div>
              <div className="input-field">
                <i>
                  <FaLock />
                </i>
                <input
                  type="password"
                  placeholder="Password"
                  value={Rvalues.password}
                  onChange={handleDetails("password")}
                />
              </div>
              <Collapse in={open}>
                <Alert
                  severity="error"
                  style={{
                    background: "#ffc6c6",
                    color: "#fff",
                  }}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <FaTimes />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  {message}
                </Alert>
              </Collapse>
              <input
                type="submit"
                className="btn"
                value={valid ? "SignUp" : "Validate Email"}
                // value="Validate Email"
                // onClick={handleSubmit}
                onClick={handleSubmit}
              />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <div className="social-media">
                  <Link className="social-icon" to="#">
                    <FaGoogle />
                  </Link>
                  <Link className="social-icon" to="#">
                    <FaApple />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSwitch}
              >
                Sign up
              </button>
            </div>
            <img
              src={login}
              style={{
                width: "60%",
                position: "relative",
                top: "-4rem",
                left: "-10rem",
                marginTop: "2rem",
              }}
              className="image"
              alt=""
            />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={handleSwitch}
              >
                Sign in
              </button>
            </div>
            <img src={signUp} className="image" alt="" />
          </div>
        </div>
        {/* popup for email verification */}
        <div className={popup ? "OTPVerificationModal" : "hide"}>
          <div className="otpMContatiner">
            <div className="cut" onClick={handlePopup}>
              <FaTimes />
            </div>
            <h1 className="otpHeading">
              Please Enter the One Time Password to verify your account
            </h1>
            <h3 className="otpText">
              An One Time Password has been sent to {Rvalues.email}
            </h3>
            <form className="otpInField">
              <input type="number" className="otpField" min="0" />
              <input
                type="button"
                value="Validate"
                className="btn"
                onClick={validate}
              />
            </form>
            <span className="resend">Resend OTP</span>
            <div className="goBack" onClick={handlePopup}>
              Entered wrong email?
            </div>
          </div>
        </div>
        {/* popup for password change */}
        <div className={pwd ? "OTPVerificationModal" : "hide"}>
          <div className="otpMContatiner" style={{ justifyContent: "center" }}>
            <div
              className="cut"
              onClick={handleFgpwd}
              style={{
                position: "absolute",
                top: "1rem",
              }}
            >
              <FaTimes />
            </div>
            <h1 style={{ marginBottom: "2rem" }} className="otpHeading">
              Please enter your registered email.
            </h1>
            <form className="otpInField">
              <input type="number" className="otpField" min="0" />
              <input
                type="button"
                value="Send Reset Link"
                className="btn"
                style={{ margin: "1rem 0" }}
                onClick={sendLink}
              />
            </form>
            {/* <span className="resend">Resend OTP</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
