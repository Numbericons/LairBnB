import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';
import { fetchReviews } from '../../actions/reviews_actions';
import { fetchLairs } from '../../actions/lairs_actions';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout(user)),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchLairs: () => dispatch(fetchLairs()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)