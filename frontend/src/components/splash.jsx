import React from 'react';
import BookingForm from './bookings/booking_form'

const SplashPage = props => {
  return (
    <section>
      <div className="splash-back">
        <div className="nav-splash-container">
          <a href="#/">
            <i className="fab fa-airbnb"></i>
          </a>
          
          <nav className='nav-session-container'>
            <button className='btn-session'>Log in</button>
            <button className='btn-session'>Sign up</button>
          </nav>
        </div>
        <BookingForm />
      </div>

    </section>
  )
}

export default SplashPage