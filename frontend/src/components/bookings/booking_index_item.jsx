import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.destroyBooking(this.props.booking._id)
            .then(() => {
                this.props.fetchBookings();
            })
    }

    componentDidMount() {
        this.props.fetchLair(this.props.booking.lair_id)
    }

    render() {
        const { booking, lair } = this.props;
        if (!booking || !lair) return null;
        
        return (
            <div className="actual-booking-container">
                <div className="booking-index-img-container">
                    <img className="booking-index-img" src={lair.image_url} alt="lair" />
                </div>
                <div className="booking-index-info-container">
                    <div className="booking-index-dates">{new Date(booking.arrival_date).toDateString()} - {new Date(booking.departure_date).toDateString()}</div>
                    <Link to={`/lair/${lair._id}`}>
                        <div className="booking-index-location">{lair.location}</div>
                    </Link>
                    <div className="booking-index-type">1 {lair.type} reservation</div>
                    <div className="user-profile-left-line">
                        <div className="line"></div>
                    </div>
                    <button className="cancel-booking-button" onClick={this.handleDelete}>cancel booking</button>
                </div>
            </div>
        )
    }
}

export default BookingIndexItem;