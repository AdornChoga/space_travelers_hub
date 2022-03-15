import React from 'react';
import { useSelector } from 'react-redux';
import Rockets from '../components/rockets/Rockets';
import Loading from '../components/spinners/Loading';

const RocketsPage = () => {
  const { loading } = useSelector((state) => state.rockets);
  return (
    <>
      { loading ? <Loading /> : <Rockets />}
    </>
  );
};

export default RocketsPage;
