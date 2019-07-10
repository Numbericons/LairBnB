import React from 'react';
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            departureDate: null,
            arrivalDate: null,
            numGuests: 1
        }
    }

    componentDidMount(){
        let input = document.getElementById('booking-box-search-location');
        let autocomplete = new window.google.maps.places.Autocomplete(input);
    }

    render(){
        const number_of_guests = [];
        for (let i=2;i<=16;i++) {
            number_of_guests.push(<option value={i} key={i} default>{i} guests</option>)
        }
        return(
            <div className="booking-box-container">
                <div className="booking-box">
                    <div className="booking-box-title">
                        Book unique lairs
                    </div>
                    <form className="booking-form">
                        <label className='booking-box-label' htmlFor='booking-bar'>WHERE</label>
                        <div className='booking-box-input'>
                            <input id="booking-box-search-location" className='box-input' type="text" placeholder='Anywhere' autoComplete='off'/>
                        </div>
                        <div>
                            <div className='booking-box-dates'>
                                <label className='booking-box-label' htmlFor='booking-bar'>DATES</label>
                                <DateRangePicker 
                                    startDate={this.state.arrivalDate}
                                    startDateId="arrival_date"
                                    endDate={this.state.departureDate}
                                    endDateId="depart_date"
                                    onDatesChange={({ startDate, endDate }) => this.setState({ departureDate: endDate, arrivalDate: startDate })} 
                                    focusedInput={this.state.focusedInput}
                                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='booking-box-label'>
                                GUESTS
                                <br/>
                                <select className="listing-show-guest-dropdown">
                                    <option value="1" default>1 guest</option>
                                    {number_of_guests}
                                </select>
                            </label>
                        </div>
                        <div className="booking-box-submit-container">
                            <button className='booking-box-submit'>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default BookingForm;