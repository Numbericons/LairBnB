import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)