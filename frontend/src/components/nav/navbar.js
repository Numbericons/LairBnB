import React from 'react';
import LogInContainer from '../session/login_form_container';
import SignUpContainer from '../session/signup_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: "",
      showUserDropdown: false
    };
    this.logoutUser = this.logoutUser.bind(this);
    this.toggleUserDropdown = this.toggleUserDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.toggleUserDropdown();
      this.props.logout();
  }

  toggleUserDropdown(event) {
    if (this.inside.classList.contains("show-hidden")) {
      this.inside.classList.remove("show-hidden");
      document.removeEventListener("mousedown", this.handleClickOutside);
    } else {
      this.inside.classList.add("show-hidden");
      document.addEventListener("mousedown", this.handleClickOutside);
    }
  }

  componentDidMount() {
    this.inside = document.getElementById("user-dropdown");
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.inside && !this.inside.contains(event.target) && event.target.tagName !== "IMG") {
      this.inside.classList.remove("show-hidden");
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
  }

  showModal() {
    switch (this.state.modal) {
      case "sign in":
        return (
          <LogInContainer 
            closeComponent={this.changeModal("")}
            switchComponent={this.changeModal("sign up")}
          />
        )
      case "sign up":
        return (
          <SignUpContainer 
            closeComponent={this.changeModal("")}
            switchComponent={this.changeModal("sign in")}
          />        
        )
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
    if (this.props.currentUser) {
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
          <div className='btn-session'>
            <img
              className='profile-pic'
              alt="user profile pic"
              src={this.props.currentUser.image_url || ""}
              onClick={this.toggleUserDropdown}
            />
          </div>
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
          <ul
            id="user-dropdown"
            className="hidden"
          >
            <li
              className="user-dropdown-lis"
            >
              Profile
            </li>
            <li
              className="user-dropdown-lis"
              onClick={this.logoutUser}
            >
              Log Out
            </li>
          </ul>
          {this.showModal()}
        </div>
      );
  }
}

export default NavBar;