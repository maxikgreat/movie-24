import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Header } from '@components/common';
import routes from '@pages/routes';

function App () {
  return (
    <>
      <Header />
      <main>
        <Switch>
          {
            routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))
          }
          <Redirect to={'/'} />
        </Switch>
      </main>
    </>
  );
}

export default App;
