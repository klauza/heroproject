import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaKey } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

var iconStyle1 = {transform: "scale(1.5)", margin: "0 5px"};
var iconStyle2 = {transform: "scale(1.2)", margin: "0 10px"};

const SignedOutLinks = () => {
  return (
    <ul className="right signed-out-links">
      <li><NavLink to='/signup' className="navlink link-with-border"><FaUserPlus style={iconStyle1}/> Signup </NavLink></li>
      <li><NavLink to='/signin' className="navlink"><FaKey style={iconStyle2}/> Login </NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;
