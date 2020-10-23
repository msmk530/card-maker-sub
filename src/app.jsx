import React from 'react';

import './app.css';
import Login from './components/Login/login';

function App({ authService }) {
  return <Login authService={authService} />;
}

export default App;
