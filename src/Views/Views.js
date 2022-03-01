import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RocketsPage from '../pages/RocketsPage';
import Missions from '../pages/Missions';
import MyProfilePage from '../pages/MyProfilePage';

const Views = () => (
  <Routes>
    <Route index element={<RocketsPage />} />
    <Route path="/missions" element={<Missions />} />
    <Route path="/myprofile" element={<MyProfilePage />} />
  </Routes>
);

export default Views;
