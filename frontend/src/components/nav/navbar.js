import React from 'react';
import { Link } from 'react-router-dom'
import LogInContainer from '../session/login_form_container';
import SignUpContainer from '../session/signup_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: ""
    };
    // this.logoutUser = this.logoutUser.bind(this);
  }

  // logoutUser(e) {
  //     e.preventDefault();
  //     this.props.logout();
  // }

  showModal() {
    switch (this.state.modal) {
      case "sign in":
        return <LogInContainer closeComponent={this.changeModal("")} />
      case "sign up":
        return <SignUpContainer closeComponent={this.changeModal("")} />
      default:
        return ""
    }
  }

  changeModal(modalName) {
    return (event) => {
      this.setState({ modal: modalName });
    }
  }

  getLinks() {
    if (this.state.loggedIn) {
      return (
        <nav className='nav-session-container'>
          <button
            className='btn-session'
          >
            Trips
          </button>
          <button
            className='btn-session'
          >
            Messages
          </button>
          <img
            className='btn-session profile-pic'
            src={this.props.currentUser.image_url}
          />
        </nav>
      )
    } else {
      return (
        <nav className='nav-session-container'>
          <button
            className='btn-session'
            onClick={this.changeModal("sign in")}
          >
            Log in
            </button>
          <button
            className='btn-session'
            onClick={this.changeModal("sign up")}
          >
            Sign up
            </button>
        </nav>
      )
    }
  }
  
  render() {
      return (
        <div className="nav-splash-container">
          <a href="#/">
            <i className="fab fa-airbnb"></i>
          </a>
          {this.getLinks()}
          {this.showModal()}
        </div>
      );
  }
}

export default NavBar;