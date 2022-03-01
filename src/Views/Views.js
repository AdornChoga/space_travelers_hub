import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RocketsPage from '../pages/RocketsPage';
import Missions from '../pages/Missions';
import MyProfile from '../pages/MyProfile';

const Views = () => (
  <Routes>
    <Route index element={<RocketsPage />} />
    <Route path="/missions" element={<Missions />} />
    <Route path="/myprofile" element={<MyProfile />} />
  </Routes>
);

export default Views;
