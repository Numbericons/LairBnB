import React from 'react';
import BookingForm from './bookings/booking_form';
import NavBarContainer from './nav/navbar_container';

class SplashPage extends React.Component {
<<<<<<< HEAD
=======
  constructor(props) {
    super(props);
  }
>>>>>>> a1c28bb53f5d1bb3475ebabdfbb741318f22cdc3

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