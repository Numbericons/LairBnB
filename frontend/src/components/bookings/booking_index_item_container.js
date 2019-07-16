import { connect } from 'react-redux';
import { fetchLair} from '../../actions/lairs_actions';
import { destroyBooking, fetchBookings } from '../../actions/booking_actions';
import BookingIndexItem from './booking_index_item';

const msp = (state, ownProps) => {
    return {
        lair: state.entities.lairs[ownProps.booking.lair_id],
    }
}

const mdp = dispatch => {
    return {
        fetchLair: id => dispatch(fetchLair(id)),
        destroyBooking: bookingId => dispatch(destroyBooking(bookingId)),
        fetchBookings: () => dispatch(fetchBookings())
    }
}

export default connect(msp, mdp)(BookingIndexItem);