import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import navbarIcon from '../svg/robot-arm.svg';

const Navbar = (props) => {
  const { auth, profile } = props;
  //console.log(auth);

  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;


  return (
    <nav className="nav-wrapper">
      <div className="container nav-container">
        
        <Link to='/' className="logo">
          <img className="navbar-icon" src={navbarIcon} />
          <p>hero project</p>
        </Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
