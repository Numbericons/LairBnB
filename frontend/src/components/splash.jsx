import React from 'react';
import BookingForm from './bookings/booking_form';

class SplashPage extends React.Component {

  render() {
    return (
      <section>
        <div className="splash-back">
          <BookingForm />          
        </div>
      </section>
    )
  }
}

export default SplashPage