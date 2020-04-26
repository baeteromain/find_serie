import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './components/NotFound';
import Connexion from './components/Connexion';
import Torrent from './components/Torrent';
import Serie from './components/Serie';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route exact path='/pseudo/:pseudo' component={App} />
      <Route exact path='/pseudo/:pseudo/torrent' component={Torrent} />
      <Route exact path='/pseudo/:pseudo/serie' component={Serie} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
