import React from 'react';
import BookingForm from './bookings/booking_form';
import NavBarContainer from './nav/navbar_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="splash-back">
          <NavBarContainer />
          <BookingForm />          
        </div>

      </section>
    )
  }
}

export default SplashPage