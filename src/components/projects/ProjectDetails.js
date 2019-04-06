import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container project-details">
      <div className="project-details__card">

        <div className="project-details__card-content">
          <span className="card-title"> Card Title - {id}</span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>

        <div className="project-details__card-action">
          <div>Posted by Michal</div>
          <div>2nd October, '08</div>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetails
