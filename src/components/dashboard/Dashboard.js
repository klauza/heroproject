import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
//higher order component

class Dashboard extends Component {
  render(){

    console.log(this.props);

    return(
      <div className="dashboard container">
        <div className="dashboard-row">
          <div className="dashboard-row__col1"> <ProjectList /> </div>
          <div className="dashboard-row__col2"> <Notifications/> </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard)