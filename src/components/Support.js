import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Support.css";
import {FaTimes} from "react-icons/fa";
  import { Alert, IconButton, Collapse } from "@mui/material/";

const Support = () => {
  const [makeTicket, setMakeTicket] = useState({
    subject: "",
    message: "",
    attachmentLink: "",
    ticketId: "",
  });

  return (
    <div className="supportBody">
      <div className="sbHeader">
        <select name="ticketView" id="" className="sbSelector">
          <option value="Resolved">Resolved</option>
          <option value="Open">Open</option>
        </select>
        <Link to="#" className="rpBTN">
          Raise a Ticket
        </Link>
        <Link to="../admindash/users" className="rpBTN">
          Admin Dashboard
        </Link>
      </div>
      
    </div>
  );
};

export default Support;
