import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamProject = ({ name, status, description, goals }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(true);
  };

  return (
    <div className="col-md-4 team-project" onClick={handleClick}>
      <h3>{name}</h3>
      <p>Status: {status}</p>
      {showDetail && <ProjectDetail name={name} status={status} description={description} goals={goals} />}
    </div>
  );
};

export default TeamProject;
