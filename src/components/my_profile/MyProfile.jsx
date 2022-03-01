import React from 'react';
import MyMissions from './MyMissions';

import classes from './MyProfile.module.css';

const MyProfile = () => (
  <div className={classes.my_profile_container}>
    <MyMissions />
  </div>
);

export default MyProfile;
