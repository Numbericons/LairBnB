import React from 'react';
import BookingIndexItemContainer from "./booking_index_item_container";

class BookingIndex extends React.Component {
    constructor(props) {
        super(props);
        this.sortedBookings = this.sortedBookings.bind(this);
    }
    componentDidMount() {
        this.props.fetchBookings();
    }

    sortedBookings() {
        let { bookings } = this.props;
        let swap = true;
        while (swap === true) {
            swap = false;
            for (let i=0;i<bookings.length - 1;i++) {
                if ( bookings[i].arrival_date > bookings[i+1].arrival_date) {
                    let bookingSwap = bookings[i];
                    bookings[i] = bookings[i+1];
                    bookings[i+1] = bookingSwap;
                    swap = true;
                }
            }
        }
        return bookings;
    }

    render() {
        let bookings = this.sortedBookings();
        if (bookings.length === 0) {
            return (
                <div className="no-bookings-index-container">
                    <div className="no-booking-index-header">Upcoming plans</div>
                    <div className="booking-index-none">You have no upcoming trips. Start exploring ideas for your next trip.</div>
                    <div className='booking-none-pic-container'>
                        <img className='booking-none-pic' alt="no bookings" src="https://lairbnb-dev.s3.us-east-2.amazonaws.com/splash/airBnbBooking.png"/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="booking-index-container">
                    <div className="booking-index-header">Upcoming plans</div>
                    <ul className="booking-formatter">
                        {bookings.map(booking => (                        
                            <BookingIndexItemContainer 
                                key={booking._id}
                                booking={booking}
                            />
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default BookingIndex;