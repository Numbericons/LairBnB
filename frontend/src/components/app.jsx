import React from 'react';
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Splash from './splash';
import MainLairIndexContainer from './lairs/main_lairs_index_container';
import UserShowContainer from './users/user_show_container';
import Footer from './footer/footer';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const App = (props) => (
  <section>
    <NavBarContainer />
    {!props.currentUser && (
      <Route exact path="/" component={Splash} />
    )}
    <Switch>
      <Route exact path="/" component={MainLairIndexContainer} />
      <Route path="/users/show/:user_id" component={UserShowContainer} />
      {/* <Route path="/lair/:lair_id" component={LairShowContainer} /> */}
      {/* <Route path="/search/all" component={LairIndex} */}
    </Switch>
    <Route path="/" component={Footer} />


  </section> 
    
);

export default connect(mapStateToProps, mapDispatchToProps)(App);