import React from 'react';
import BookingIndexItemContainer from "./booking_index_item_container";

class BookingIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBookings();
    }

    render() {
        const { bookings } = this.props;
        if (bookings.length === 0) {
            return (
                <div className="no-bookings-index-container">
                    <div className="no-booking-index-header">Upcoming plans</div>
                    <div className="booking-index-none">You have no upcoming trips. Start exploring ideas for your next trip.</div>
                    <div className='booking-none-pic-container'>
                        <img className='booking-none-pic' src="https://lairbnb-dev.s3.us-east-2.amazonaws.com/splash/airBnbBooking.png"/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="booking-index-container">
                    <div className="booking-index-header">Upcoming plans</div>
                    <ul className="booking-formatter">
                        {bookings.map(booking => <BookingIndexItemContainer key={booking._id} booking={booking} />)}
                    </ul>
                </div>
            )
        }
    }
}

export default BookingIndex;