import React from 'react'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import { createBooking, fetchBookings } from '../../actions/booking_actions';
import moment from 'moment';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    bookings: state.entities.bookings,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBooking: booking => dispatch(createBooking(booking)),
    fetchBookings: () => dispatch(fetchBookings())
  }
}

class ReserveForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num_guests: 1,
            departure_date: null,
            arrival_date: null,
            lair_id: this.props.lair._id,
            guest_id: this.props.currentUserId,
            showReservationDetails: false,
            modal: "",
            errors: "",
            success: ""
        }
        this.switchModal = this.switchModal.bind(this);
        this.reserve = this.reserve.bind(this);
        this.showReservationDetails = this.showReservationDetails.bind(this);
        this.disableBookedDay = this.disableBookedDay.bind(this);
    }

    componentDidMount(){
        this.props.fetchBookings();
    }

    switchModal(modalName) {
        return (event) => {
            this.setState({modal: modalName});
        }
    }

    displayModal() {
        switch (this.state.modal) {
            case "sign in":
                return (
                    <LoginFormContainer
                        closeComponent={this.switchModal("")}
                        switchComponent={this.switchModal("sign up")}
                    />
                )
            case "sign up":
                return (
                    <SignupFormContainer
                        closeComponent={this.switchModal("")}
                        switchComponent={this.switchModal("sign in")}
                    />
                )
            default:
                return ""
        }
    }

    reserve(event) {
        event.preventDefault();
        if (this.props.currentUserId && this.state.departure_date && this.state.arrival_date) {
            const {num_guests, departure_date, arrival_date, lair_id, guest_id} = this.state;
            this.props.createBooking({
                num_guests, 
                departure_date: departure_date.format(),
                arrival_date: arrival_date.format(),
                lair_id, 
                guest_id
            });
            this.setState({errors: "", success: "You've created your booking."});
        } else if (!this.props.currentUserId) {
            this.setState({modal: "sign in"});            
        } else {
            this.setState({errors: "You need both an arrival and departure date."})
        }
    }
    
    showReservationDetails(){
      if (this.state.arrival_date && this.state.departure_date){
        let nights = this.state.departure_date.diff(this.state.arrival_date, 'days');
        let totalNightlyRate = this.props.lair.rate * nights;
        let serviceFee = Math.floor(totalNightlyRate * .07);
        return (
          <div className="reserve-form-dynamic-details">
            <div className="reserve-form-dynamic-details-row">
                <p>${this.props.lair.rate} x {nights} nights</p>
                <p>${totalNightlyRate}</p>
            </div>
            <div className="reserve-form-dynamic-details-row">
                <p>Cleaning fee</p>
                <p>$50</p>
            </div>
            <div className="reserve-form-dynamic-details-row">
                <p>Service fee</p>
                <p>${serviceFee}</p>
            </div>
            <div className="reserve-form-dynamic-details-row last">
                <p>Total</p>
                <p>${totalNightlyRate + 50 + serviceFee}</p>
            </div>
          </div>
        )
      }
    }

    getStars(rating) {
        const starArray = [];
        for (let i = 1, fin = Math.floor(rating); i <= fin; i++) {
            starArray.push(< i className="fas fa-star" />);
        }
        const remains = rating % 1;
        if (remains >= .75) {
            starArray.push(< i className="fas fa-star" />);
        } else if (remains > .25) {
            starArray.push(< i className="fas fa-star-half-alt" />);
        }
        while (starArray.length < 5) {
            starArray.push(< i className="far fa-star" />);
        }
        return (
            <div className="lair-random-tile-rating">
                {starArray}
                <span>{this.props.reviews.length}</span>
            </div>
        )
    }

    disableBookedDay(day) {
      let unavailableDays = [];
      Object.keys(this.props.bookings).forEach(bookingId => {
        let booking = this.props.bookings[bookingId]
        if (booking.lair_id === this.state.lair_id) {
          unavailableDays.push(moment(booking.arrival_date))
          unavailableDays.push(moment(booking.departure_date))

          let dateToCheck = moment(booking.arrival_date).add(1, 'd');
          while (dateToCheck.isBefore(moment(booking.departure_date))){
            unavailableDays.push(dateToCheck);
            dateToCheck = moment(dateToCheck).add(1, 'd');
          }
        }
      })
      console.log(unavailableDays);
      if (unavailableDays.length !== 0){
        return unavailableDays.some((unavailableDay) => {return unavailableDay.isSame(day)});
      }
    }
    
    render(){
      const number_of_guests = [];
      for (let i = 2; i <= 16; i++) {
        number_of_guests.push(<option value={i} key={i} default>{i} guests</option>)
      }
      const num_months = window.innerWidth <= 700 ? 1 : 2;
        return (
            <div className="reserve-form-container">
                <div className="reserve-form-details">
                    <span className="reserve-form-rate">${this.props.lair.rate}</span>
                    <span className="per-night"> per night</span>
                    {this.getStars(this.props.avgRating)}
                </div>
                <div className="reserve-form-dates-guests">
                    <h3 className="reserve-form-sub-header">Dates</h3>
                    <DateRangePicker
                        startDate={this.state.arrival_date}
                        startDateId="arrival_date"
                        endDate={this.state.departure_date}
                        endDateId="depart_date"
                        onDatesChange={({ startDate, endDate }) => this.setState({ departure_date: endDate, arrival_date: startDate })}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                        numberOfMonths={num_months}
                        isDayBlocked={(day) => this.disableBookedDay(day)}
                    />
                    <h3 className="reserve-form-sub-header">Guests</h3>
                      <select className="listing-show-guest-dropdown">
                        <option value="1" default>1 guest</option>
                        {number_of_guests}
                      </select>
                </div>
                {this.showReservationDetails()}
                <div className="error-text">{this.state.errors}</div>
                <div className="success-text">{this.state.success}</div>
                  <button 
                      className="pink-button wide-button"
                      onClick={this.reserve}
                  >
                      Reserve
                  </button>
                  {this.displayModal()}
            </div>
        )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReserveForm);