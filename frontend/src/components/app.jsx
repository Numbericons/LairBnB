import React from 'react';
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import Splash from './splash';
// import SignupFormContainer from '../session/signup_form_container';
// import LoginFormContainer from '../session/login_form_container';

const App = () => (
  <section>
    <Switch>
        <Route exact path="/" component={Splash} />
        {/* <Route path="/lair/:lair_id" component={LairShowContainer} /> */}
        {/* <Route path="/search/all" component={LairIndex} */}
    </Switch>
    {/* <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/register" component={SignupFormContainer} /> */}


  </section> 
    
);

export default App;