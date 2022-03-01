import React from 'react';

const MyMissions = () => {
  const myMissions = [
    'Mission 1',
    'Mission 2',
  ];
  return (
    <div>
      <h2>My Missions</h2>
      <ul>
        <li>{myMissions[0]}</li>
        <li>{myMissions[1]}</li>
      </ul>
    </div>
  );
};

export default MyMissions;
