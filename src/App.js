import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import SamplePage from './pages/Sample.js';
import Sampl1Page from './pages/Sampl1.js';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/sample">
            <SamplePage />
          </Route>
          <Route exact path="/sampl1">
            <Sampl1Page />
          </Route>
        </Switch>
    </Router>
  );
}
