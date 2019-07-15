import { connect } from 'react-redux';
import TypeLairIndex from './type_lairs_index';
import { selectLairsByType } from '../../selectors/selector';

const msp = (state, ownProps) => {
  const lairType = ownProps.match.params.lair_type;
  return ({
    lairs: selectLairsByType(state, lairType),
    lairType
  })
}

const mdp = (dispatch) => {
  return ({
  })
}

export default connect(msp, mdp)(TypeLairIndex);