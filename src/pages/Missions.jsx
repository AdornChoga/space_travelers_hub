import React from 'react';
import { useSelector } from 'react-redux';

import MissionsList from '../components/missions/MissionsList';
import Loading from '../components/spinners/Loading';

const Missions = () => {
  const { loading } = useSelector((state) => state.missions);
  return (
    <>
      { loading ? <Loading /> : <MissionsList />}
    </>
  );
};

export default Missions;
