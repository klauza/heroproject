import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import MergeSvgs from './MergeSvgs.js'






function ProjectDetails(props) {
  // const id = props.match.params.id; // id was not used
  //console.log(props);
  const { project, auth } = props;

  if (!auth.uid) return <Redirect to='/signin' />
  
  
  
  if (project){
    
    return(
    <div className="container project-details">
      <div className="project-details__card">

        <div className="project-details__card-content">
          <div className="svg-container-details" id="svg-items">
            
            <object className="svg-item" data={project.svg3} alt="svg3"></object>
            <object className="svg-item" data={project.svg2} alt="svg2"></object>
            <object className="svg-item" data={project.svg1} alt="svg1"></object>
            
          </div>
          <div className="about-project">
            <span className="project-title"> { project.title }</span>
            <p className="project-content"> { project.content } </p>
          
            <MergeSvgs />
            
          </div>
          
          
        </div>

        <div className="project-details__card-action">
          <div>Posted by: { project.authorFirstName } { project.authorLastName } </div>
          <div>{moment(project.createdAt.toDate()).calendar()}</div>
        </div>

        

      </div>
    </div>
    )} else {
    return(
      <div className="container">Loading project...</div>
    )
  }
  
}
  


const mapStateToProps = (state, ownProps) =>{
  //console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null; //do we have projects? true if yes
  return{
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)

