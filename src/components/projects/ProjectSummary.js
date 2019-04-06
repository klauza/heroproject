// a module component for ProjectList.js

import React from 'react';

const ProjectSummary = () => {
  return(
    <div className="card summary">
      <div className="card-content">
        <div className="card-title">Project Title</div>
        <p>Posted by someone</p>
        <p className="text-date">8 January 2019</p>
      </div>
    </div>
  )
}


export default ProjectSummary