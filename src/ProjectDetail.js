import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectDetail = ({ name, status, description, goals }) => {
  return (
    <div className="project-detail">
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>{description}</p>
      <p>Project Goals: {goals}</p>
    </div>
  );
};

export default ProjectDetail;
