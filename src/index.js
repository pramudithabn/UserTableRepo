import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route} from 'react-router';
import UserProfile from './components/UserProfile'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <Router>
  //   <Route path="users/:id?" component={UserProfile}/>
  // </Router>
  // ,
  document.getElementById('root')
);

