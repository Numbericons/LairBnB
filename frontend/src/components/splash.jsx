import React from 'react';

const SplashPage = props => {
  return (
    <section>
      <div className="splash-back">
        <div className="nav-splash-container">
          <a href="#/">
            <i className="fab fa-airbnb"></i>
          </a>
          
          <nav className='nav-session-cont'>
            <button className='btn-session'>Log in</button>
            <button className='btn-session'>Sign up</button>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default SplashPage