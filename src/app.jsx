import React from 'react';

import Login from './components/Login/login';
import Main from './components/Main/main';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App({ FileInput, authService, cardService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login authService={authService} />;
          </Route>
          <Route exact path='/app'>
            <Main
              FileInput={FileInput}
              authService={authService}
              cardService={cardService}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
