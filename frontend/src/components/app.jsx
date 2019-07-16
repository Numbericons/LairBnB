import React from 'react';
import { Route } from 'react-router-dom'
import { ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Splash from './splash';
import MainLairIndexContainer from './lairs/main_lairs_index_container';
import UserShowContainer from './users/user_show_container';
import Footer from './footer/footer';
import LairShowContainer from './lairs/lair_show_container';
import TypeLairIndexContainer from './lairs/type_lairs_index_container';
import BookingIndexContainer from './bookings/booking_index_container';
import LocationLairsIndexContainer from './lairs/location_lairs_index_container';

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
      <Route path="/s/:lair_type/all" component={TypeLairIndexContainer} />
      <Route path="/lair/:lair_id" component={LairShowContainer} />
      <ProtectedRoute path="/bookings/index" component={BookingIndexContainer} />
      <Route path="/s/stays/:location" component={LocationLairsIndexContainer} />
    </Switch>
    <Route path="/" component={Footer} />
  </section> 
    
);

export default connect(mapStateToProps, mapDispatchToProps)(App);