import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  render(){
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

export default Dashboard