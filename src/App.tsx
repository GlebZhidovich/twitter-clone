import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { Main } from './pages/main';

export function App(): React.ReactElement {
  return (
    <div className='App'>
        <Router>
            <Switch>
                <Route path='/home'>
                    <Home/>
                </Route>
                <Route path='/'>
                    <Main/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}
