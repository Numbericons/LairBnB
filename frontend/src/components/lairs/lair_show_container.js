import { connect } from 'react-redux';
import { fetchLair } from '../../actions/lairs_actions';
import { fetchUser } from '../../actions/session_actions';
import LairShow from './lair_show';
import { fetchReviewsByLairId } from '../../actions/reviews_actions';
import { selectReviewsByLairId } from '../../selectors/selector';

const msp = (state, ownProps) => {
    const lairId = ownProps.match.params.lair_id;
    const lair = state.entities.lairs[lairId];
    return ({
        lair: lair,
        lairId: lairId,
        users: state.entities.users,
        reviews: selectReviewsByLairId(state, lairId)
    })
}

const mdp = (dispatch) => {
    return ({
        fetchLair: (id) => dispatch(fetchLair(id)),
        fetchUser: id => dispatch(fetchUser(id)),
        fetchReviewsByLairId: lairId => dispatch(fetchReviewsByLairId(lairId))
    })
}

export default connect(msp, mdp)(LairShow);