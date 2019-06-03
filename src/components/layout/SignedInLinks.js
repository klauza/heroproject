import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'
import { FaPlus } from "react-icons/fa";

var iconAddProject = {transform: "scale(1.25", margin: "0 5px"};

const SignedInLinks = (props) => {

  return (
    <ul className="right signed-in-links">
      <li><NavLink to='/create' className="navlink"><FaPlus style={iconAddProject} /> New project </NavLink></li>
      <li> <a onClick={props.signOut} className="navlink"> Log out </a> </li>
      <li><NavLink to='/' className="user-button navlink"> 
        {props.profile.initials}</NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}


export default connect(null, mapDispatchToProps)(SignedInLinks);
