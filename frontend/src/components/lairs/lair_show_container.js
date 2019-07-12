import { connect } from 'react-redux';
import { fetchLair } from '../../actions/lairs_actions';
import { fetchUser } from '../../actions/session_actions';
import LairShow from './lair_show';

const msp = (state, ownProps) => {
    const lairId = ownProps.match.params.lair_id;
    const lair = state.entities.lairs[lairId];
    let user;
    if (lair) {
        user = state.entities.users[lair.owner_id];
    }
    return ({
        lair: lair,
        lairId: lairId,
        user: user
    })
}

const mdp = (dispatch) => {
    return ({
        fetchLair: (id) => dispatch(fetchLair(id)),
        fetchUser: id => dispatch(fetchUser(id)) 
    })
}

export default connect(msp, mdp)(LairShow);