import React, { useState } from 'react';
import MemberDetail from './MemberDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamMember = ({ name, role, bio, dob, gender }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(true);
  };

  return (
    <div className="col-md-4 team-member" onClick={handleClick}>
      <h3>{name}</h3>
      <p>{role}</p>
      {showDetail && <MemberDetail name={name} role={role} bio={bio} dob={dob} gender={gender} />}
    </div>
  );
};

export default TeamMember;
