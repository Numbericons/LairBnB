import { connect } from 'react-redux';
import MainLairIndex from './main_lairs_index';
import { fetchLairs } from '../../actions/lairs_actions'

const msp = (state) => {
    return ({
        lairs: state.entities.lairs,
        reviews: state.entities.reviews
    })
}

const mdp = (dispatch) => {
    return ({
        fetchLairs: () => dispatch(fetchLairs()),
    })
}

export default connect(msp, mdp)(MainLairIndex);