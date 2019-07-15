import React from 'react';

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.destroyBooking(this.props.booking._id)
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
                    <img className="booking-index-img" src={lair.image_url} />
                </div>
                <div className="booking-index-info-container">
                    <div className="booking-index-dates">{new Date(booking.arrival_date).toDateString()} - {new Date(booking.departure_date).toDateString()}</div>
                    <div className="booking-index-location">{lair.location}</div>
                    <div className="booking-index-type">1 {lair.type} reservation</div>
                    <div className="user-profile-left-line">
                        <div className="line"></div>
                    </div>
                    <button onClick={this.handleDelete}>delete dat</button>
                </div>
            </div>
        )
    }
}

export default BookingIndexItem;