import React from 'react';
import MyMissions from './MyMissions';

import classes from './MyProfile.module.css';
import MyRockets from './MyRockets';

const MyProfile = () => (
  <div className={classes.my_profile_container}>
    <MyMissions />
    <MyRockets />
  </div>
);

export default MyProfile;
