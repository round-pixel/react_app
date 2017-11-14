import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';

const App = () => (
  <Router>
    <MainLayout />
  </Router>
);

export default App;
