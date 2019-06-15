import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Main from '../../containers/main/main';
import Autentification from '../../containers/autentification/autentification';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/login' component={Autentification}/>
        <Route path='/registration' component={Autentification}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;