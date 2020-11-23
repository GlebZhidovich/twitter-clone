import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home';
import { Main } from './components/main';

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
