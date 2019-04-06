import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/create' className="navlink"> New project </NavLink></li>
      <li><NavLink to='/' className="navlink"> Log out </NavLink></li>
      <li><NavLink to='/' className="user-button navlink"> MK </NavLink></li>
    </ul>
  )
}

export default SignedInLinks;
