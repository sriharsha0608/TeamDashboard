import React from 'react';
import TeamMember from './TeamMember';
import TeamProject from './TeamProject';
import TeamMetrics from './TeamMetrics';
import DiscussionForum from './DiscussionForum';
import './App.css'; 
const teamMembersData = [
  {
    name: 'Harsha',
    role: 'Software Engineer',
    bio: 'Experienced software engineer with a passion for creating efficient and scalable applications.',
    dob: 'August 6, 1999',
    gender: 'Male',
  },
  {
    name: 'Krishna',
    role: 'Application Developer',
    bio: 'An application developer with passion towards building apps',
    dob: 'February 17, 2001',
    gender: 'Male',
  }, 
];

const teamProjectsData = [
  {
    name: 'Project Healthcare website',
    status: 'In Progress',
    description: 'Building a web application for the healthcare industry.',
    goals: 'Help the healthcare industry in making a web application',
  },
  {
    name: 'Project Dashboard',
    status: 'Completed',
    description: 'Building a simple team dashboard to explore react components.',
    goals: 'Deliver a  simple user-friendly interface of team dashboard.',
  },
];

const teamMetricsData = {
  projectCompletionRate: 75,
  teamMemberWorkload: 'Optimal',
};

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Team Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <h2>Team Members</h2>
          <div className="row team-members">
            {teamMembersData.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h2>Team Projects</h2>
          <div className="row team-projects">
            {teamProjectsData.map((project, index) => (
              <TeamProject key={index} {...project} />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h2>Team Metrics</h2>
          <TeamMetrics {...teamMetricsData} />
        </div>
      </div>
      <div className="row">
        <DiscussionForum />
      </div>
    </div>
  );
}

export default App;
