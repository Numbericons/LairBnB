import { connect } from 'react-redux';
import { editUser, fetchUser } from '../../actions/session_actions';
import { fetchLairs } from '../../actions/lairs_actions';
import UserShow from './user_show';
import { selectLairsByUserId, selectReviewsByHostId } from '../../selectors/selector';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.user_id;
  return {
    userId,
    currentUser: state.entities.users[state.session.id] || {},
    user: state.entities.users[userId] || {},
    allUsers: state.entities.users,
    lairs: selectLairsByUserId(state, userId),
    allLairs: state.entities.lairs,
    reviews: selectReviewsByHostId(state, userId),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: user => dispatch(editUser(user)),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchLairs: () => dispatch(fetchLairs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)