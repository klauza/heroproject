import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
//higher order component

import { firestoreConnect, firebase } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render(){
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    console.log(this.props);

    return(
      <div className="dashboard container">
        <div className="dashboard-row">
          <div className="dashboard-row__col1"> <ProjectList projects={projects} /> </div>
          <div className="dashboard-row__col2"> <Notifications/> </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
  )(Dashboard)