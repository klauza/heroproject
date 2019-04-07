// a module component for ProjectList.js

import React from 'react';

const ProjectSummary = ({project}) => {
  return(
    <div className="card summary">
      <div className="card-content">
        <div className="card-title">{project.title}</div>
        <p>Posted by someone</p>
        <p className="text-date">8 January 2019</p>
      </div>
    </div>
  )
}


export default ProjectSummary