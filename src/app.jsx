import React from 'react';

import Login from './components/Login/login';
import Main from './components/Main/main';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login authService={authService} />;
          </Route>
          <Route exact path='/app'>
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
