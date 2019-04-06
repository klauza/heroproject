import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/signup' className="navlink"> Signup </NavLink></li>
      <li><NavLink to='/signin' className="navlink"> Login </NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;
