import { connect } from 'react-redux';
import { fetchLair } from '../../actions/lairs_actions';
import LairShow from './lair_show';

const msp = (state, ownProps) => {
    return ({
        lair: state.entities.lairs[ownProps.match.params.lair_id]
    })
}

const mdp = (dispatch) => {
    return ({
        fetchLair: (id) => dispatch(fetchLair(id))
    })
}

export default connect(msp, mdp)(LairShow);