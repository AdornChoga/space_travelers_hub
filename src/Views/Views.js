import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rockets from '../pages/Rockets';

const Views = () => (
  <Routes>
    <Route index element={<Rockets />} />
  </Routes>
);

export default Views;
