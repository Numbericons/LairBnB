import React from 'react';
import BookingForm from './bookings/booking_form';
import NavBar from './nav/navbar_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="splash-back">
          <NavBar />
          <BookingForm />          
        </div>

      </section>
    )
  }
}

export default SplashPage