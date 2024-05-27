import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RechargePlan from "./components/Recharge/RechargePlan";
import AdminDash from "./pages/AdminDash";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignPage from "./pages/SignPage";
import UserDetails_Admin from "./pages/UserDetails_Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<SignPage checkInVal={false}/>}/>
          <Route path="/register" element={<SignPage checkInVal={true}/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/rechargePlan" element={<RechargePlan/>}/>
          <Route path="/admindash/users" element={<AdminDash/>}/>
          {/* <Route path="/user/:userName" element={<UserDetails_Admin/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
