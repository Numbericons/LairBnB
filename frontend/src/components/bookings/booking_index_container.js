import { connect } from "react-redux";
import { fetchBookings } from "../../actions/booking_actions";
import BookingIndex from "./booking_index";

const msp = (state) => {
    return {
        bookings: Object.values(state.entities.bookings)
    };
};

const mdp = dispatch => {
    return {
        fetchBookings: () => dispatch(fetchBookings()),
    };
};

export default connect(msp, mdp)(BookingIndex);