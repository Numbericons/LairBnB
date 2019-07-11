import React from 'react';
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainLairIndexContainer from './lairs/main_lairs_index_container';
import Footer from './footer/footer';

import Splash from './splash';
// import SignupFormContainer from '../session/signup_form_container';
// import LoginFormContainer from '../session/login_form_container';

const App = () => (
  <section>
      <Route exact path="/" component={Splash} />
    <Switch>
      <Route exact path="/" component={MainLairIndexContainer} />
        {/* <Route path="/lair/:lair_id" component={LairShowContainer} /> */}
        {/* <Route path="/search/all" component={LairIndex} */}
    </Switch>
    <Route exact path="/" component={Footer} />
    {/* <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/register" component={SignupFormContainer} /> */}


  </section> 
    
);

export default App;