import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'


const SignedInLinks = (props) => {

  return (
    <ul className="right">
      <li><NavLink to='/create' className="navlink"> New project </NavLink></li>
      <li> <a onClick={props.signOut}> Log out </a> </li>
      <li><NavLink to='/' className="user-button navlink"> MK </NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}


export default connect(null, mapDispatchToProps)(SignedInLinks);
