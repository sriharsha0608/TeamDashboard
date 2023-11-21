import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MemberDetail = ({ name, role, bio, dob, gender }) => {
  return (
    <div className="member-detail">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{bio}</p>
      <p>Date of Birth: {dob}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default MemberDetail;
