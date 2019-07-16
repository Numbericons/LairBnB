import { connect } from 'react-redux';
import TypeLairIndex from './type_lairs_index';
import { selectLairsByType, selectLairsByCost } from '../../selectors/selector';

const msp = (state, ownProps) => {
  const lairType = ownProps.match.params.lair_type;
  let lairs = [];
  if (lairType === "Luxury") {
    lairs = selectLairsByCost(state, 3000);
  } else {
    lairs = selectLairsByType(state, lairType);
  }

  return ({
    lairType,
    lairs: lairs
  }) 
}

const mdp = (dispatch) => {
  return ({
  })
}

export default connect(msp, mdp)(TypeLairIndex);