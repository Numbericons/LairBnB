import { connect } from 'react-redux';
import LocationLairIndex from './location_lairs_index';
import { selectLairsByLocation } from '../../selectors/selector';

const msp = (state, ownProps) => {
  const qString = ownProps.location.search;
  const latMatch = qString.match(/\?lat=(.*)&/);
  const lngMatch = qString.match(/lng=(.*)&?/);

  const lairLocation = ownProps.match.params.lair_location;
  return ({
      // lairs: selectLairsByLocation(state, latMatch & latMatch[1], lngMatch & lngMatch[1]),
      lairs: Object.values(state.entities.lairs),
      lairLocation
  })
}

const mdp = (dispatch) => {
    return ({
        // updateBounds: (bounds) => dispatch(updateLairs(bounds))
    })
}

export default connect(msp, mdp)(LocationLairIndex);