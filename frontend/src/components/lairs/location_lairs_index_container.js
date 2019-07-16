import { connect } from 'react-redux';
import LocationLairIndex from './location_lairs_index';

const msp = (state, ownProps) => {
  const qString = ownProps.location.search;
  const latMatch = qString.match(/\?lat=(.*)&/);
  const lngMatch = qString.match(/lng=(.*)&?/);

  const lairLocation = ownProps.match.params.location.replace(/_/g, " ");
  return ({
      lairLocation,
      lat: latMatch && Number(latMatch[1]),
      lng: lngMatch && Number(lngMatch[1])
  })
}

const mdp = (dispatch) => {
    return ({
    })
}

export default connect(msp, mdp)(LocationLairIndex);