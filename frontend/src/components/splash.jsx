import React from 'react';

const SplashPage = props => {
  return (
    <section>
      <div className="splash-back">
        <div className="nav-splash-container">
          <a href="#/">
            <i className="fab fa-airbnb"></i>
          </a>
          
          <nav class='nav-session-cont'>
            <button class='btn-session'>Log in</button>
            <button class='btn-session'>Sign up</button>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default SplashPage