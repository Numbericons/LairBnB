import React from 'react';
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {withRouter} from 'react-router-dom';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            departureDate: null,
            arrivalDate: null,
            numGuests: 1,
        }
        this.changeInput = this.changeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let input = document.getElementById('booking-box-search-location');
        let autocomplete = new window.google.maps.places.Autocomplete(input);
        let address;
        autocomplete.addListener("place_changed", () => {
            if (!autocomplete.getPlace().formatted_address) {
                address = autocomplete.getPlace().name;
                this.setState({
                    location: address
                });
            } else {
                address = autocomplete.getPlace().formatted_address;
                this.setState({
                    location: address
                });
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: this.state.location }, (results, status) => {
            if (status === window.google.maps.GeocoderStatus.OK) {
                const lat = results[0].geometry.location.lat();
                const lng = results[0].geometry.location.lng();
                const loc = results[0].formatted_address.replace(/ /g, "_");
                this.props.history.push(`/s/stays/${loc}?lat=${lat}&lng=${lng}`);
            } else {
                // your idea about objects here, maybe do a backend search
                this.props.history.push(`/listings?lat=34.019956&lng=-118.824270`);
            }
        });
        this.setState({ location: "" });
    }

    changeInput(key) {
        return (event) => {
            event.preventDefault();
            this.setState({ [key]: event.target.value })
        }
    }

    render(){
        const number_of_guests = [];
        for (let i=2;i<=16;i++) {
            number_of_guests.push(<option value={i} key={i} default>{i} guests</option>)
        }
        const num_months = window.innerWidth <= 700 ? 1 : 2;
        return(
            <div className="booking-box-container">
                <div className="booking-box">
                    <div className="booking-box-title">
                        Book unique lairs
                    </div>
                    <form className="booking-form" onSubmit={this.handleSubmit}>
                        <label className='booking-box-label' htmlFor='booking-bar'>WHERE</label>
                        <div className='booking-box-input'>
                            <input 
                                id="booking-box-search-location" 
                                className='box-input' 
                                type="text" 
                                placeholder='Anywhere' 
                                autoComplete='off'
                                onChange={this.changeInput("location")}
                            />
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
                                    numberOfMonths={num_months}
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

export default withRouter(BookingForm);