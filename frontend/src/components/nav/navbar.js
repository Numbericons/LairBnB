import React from 'react';
import {withRouter} from 'react-router-dom';
import LogInContainer from '../session/login_form_container';
import SignUpContainer from '../session/signup_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: ""
    };
    this.logoutUser = this.logoutUser.bind(this);
    this.toggleUserDropdown = this.toggleUserDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.goToUserShow = this.goToUserShow.bind(this);
  }

  goToUserShow() {
    this.toggleUserDropdown();
    this.props.history.push(`/users/show/${this.props.currentUser.id}`);
  }

  logoutUser(e) {
      e.preventDefault();
      this.toggleUserDropdown();
      this.props.logout();
      // this.props.history.push("/");
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
    let input = document.getElementById('nav-search-bar');
    if (input) {
      this.autocomplete = new window.google.maps.places.Autocomplete(input);
    }
  }

  componentDidUpdate() {
    if (this.props.currentUser && !this.autocomplete) {
      let input = document.getElementById('nav-search-bar');
      if (input) {
        this.autocomplete = new window.google.maps.places.Autocomplete(input);
      }
    }
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
  displaySearchInput() {
    if ((this.props.location.pathname !== "/" || this.props.currentUser) && !this.props.location.pathname.startsWith("/users/show")) {
      return (
        <div>
          <i className="fas fa-search" />
          <input
            id="nav-search-bar"
            className="nav-search"
            placeholder='Try "Mordor"'
          />
        </div>
      )
    }
  }
  render() {
    const navSplashClass = this.props.location.pathname === "/" && !this.props.currentUser ? (
      "nav-container nav-splash"
      ):(
      "nav-container nav-nonsplash"
    );
    return (
      <div className={navSplashClass}>
        <div className="nav-left">
          <a href="#/">
            <i className="fab fa-airbnb"></i>
          </a>
          {this.displaySearchInput()}              
        </div>
        {this.getLinks()}
        <ul
          id="user-dropdown"
          className="hidden"
        >
          <li
            className="user-dropdown-lis"
            onClick={this.goToUserShow}
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

export default withRouter(NavBar);