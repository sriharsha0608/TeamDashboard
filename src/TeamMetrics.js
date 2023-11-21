import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamMetrics = ({ projectCompletionRate, teamMemberWorkload }) => {
  return (
    <div className="col-md-4 team-metrics">
      
      <p>Project Completion Rate: {projectCompletionRate}%</p>
      <p>Team Member Workload: {teamMemberWorkload}</p>
    </div>
  );
};

export default TeamMetrics;
