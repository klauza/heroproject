import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'


function ProjectDetails(props) {
  const id = props.match.params.id;
  //console.log(props);
  const { project, auth } = props;

  if (!auth.uid) return <Redirect to='/signin' />

  if (project){
    return(
    <div className="container project-details">
      <div className="project-details__card">

        <div className="project-details__card-content">
          <span className="card-title"> { project.title }</span>
          <p> { project.content } </p>
        </div>

        <div className="project-details__card-action">
          <div>Posted by: { project.authorFirstName } { project.authorLastName } </div>
          <div>2nd October, '08</div>
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

