import React from 'react';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      withEmail: false,
      showPW: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeState = this.changeState.bind(this);
    this.displayErrors = this.displayErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.signInWith = this.signInWith.bind(this);
  }

  componentDidUpdate() {
    const pwNode = document.getElementById("password-input");
    if (pwNode && this.state.showPW) {
      pwNode.type = "text";
    } else if (pwNode) {
      pwNode.type = "password";
    }
  }

  componentDidMount() {
    this.inside = document.getElementById("auth-box");
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    this.props.clearErrors();
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.inside && !this.inside.contains(event.target)) {
      this.props.closeComponent();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearErrors();
    const newObj = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    this.props.formCallback(newObj)
      .then(res => {
        this.props.closeComponent();
      })
  }

  changeState(key) {
    return (event) => {
      this.setState({ [key]: event.currentTarget.value });
    }
  }

  toggleState(key) {
    return (event) => {
      event.preventDefault();
      this.setState({ [key]: !this.state[key]});
    }
  }

  displayErrors(key) {
    let errors = this.props.errors[key];
    const input = document.getElementById(`${key}-input`);
    if (errors) {
      input.classList.add("red-border")
      return <span className="error-text">{errors}</span>
    } else if (input) {
      input.classList.remove("red-border");
    }
  }

  demoLogin(event) {
    event.preventDefault();
    const demoUser = {
      email: "DemoUser@gmail.com",
      password: "password",
    }
    this.props.clearErrors();
    this.props.login(demoUser)
      .then(res => this.props.closeComponent());
  };

  signInWith(place) {
    return (event) => {
      event.preventDefault();
    }
  }

  displaySignUpOptions() {
    if (this.state.withEmail) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="centered-text">
            Sign up with&nbsp;
            <button
              className="teal-link"
              onClick={this.signInWith("facebook")}
            >
              Facebook
            </button>&nbsp;
            or&nbsp;
            <button 
              className="teal-link"
              onClick={this.signInWith("google")}
            >
              Google
            </button>
          </div>
          <div className="or-wrapper">
            <span className="center-or">or</span>
          </div>
          <div className="input-wrapper">
            <input
              className="auth-input"
              id="email-input"
              type="email"
              value={this.state.email}
              placeholder="Email address"
              onChange={this.changeState("email")}
            />
            <i className="far fa-envelope input-icon" />
            {this.displayErrors("email")}
          </div>

          <div className="input-wrapper">
            <input
              className="auth-input"
              id="username-input"
              type="text"
              value={this.state.username}
              placeholder="Username"
              onChange={this.changeState("username")}
            />
            <i className="far fa-user input-icon" />
            {this.displayErrors("username")}
          </div>

          <div className="input-wrapper">
            <input
              className="auth-input"
              id="password-input"
              type="password"
              value={this.state.password}
              placeholder="Create a Password"
              onChange={this.changeState("password")}
            />
            {this.state.showPW ? (          
              <i className="far fa-eye input-icon" onClick={this.toggleState("showPW")}/>
            ):(
              <i className="far fa-eye-slash input-icon" onClick={this.toggleState("showPW")} />
            )}
            {this.displayErrors("password")}
          </div>

          <button
            onClick={this.demoLogin}
            className="pink-button wide-button"
          >
            <span>Demo Login</span>
          </button>
          <button
            className="pink-button wide-button"
            onClick={this.handleSubmit}
          >
            <span>Sign up</span>
          </button>

        </form>
      )
    } else {
      return (
        <div>
          <button
            className="facebook-button wide-button"
            onClick={this.signInWith("facebook")}
          >
            <i className="fab fa-facebook-f"></i>
            <span>Continue with Facebook</span>
          </button>
          <button
            className="google-button wide-button"
            onClick={this.signInWith("google")}
          >
            <i className="fab fa-google"></i>
            <span className="google-text">Continue with Google</span>
          </button>

          <div className="or-wrapper">
            <span className="center-or">or</span>
          </div>
          <button
            className="pink-button wide-button"
            onClick={this.toggleState("withEmail")}
          >
            <i className="far fa-envelope"></i>
            <span>Sign up with Email</span>
          </button>
        </div>        
      )
    }
  }

  displaySignInOptions() {
    return (
      <form>
        <button
          className="facebook-button wide-button"
          onClick={this.signInWith("facebook")}
        >
          <i className="fab fa-facebook-f"></i>
          <span>Log in with Facebook</span>
        </button>
        <button
          className="google-button wide-button"
          onClick={this.signInWith("google")}
        >
          <i className="fab fa-google"></i>
          <span className="google-text">Log in with Google</span>
        </button>
        <div className="or-wrapper">
          <span className="center-or">or</span>
        </div>
        <div className="input-wrapper">
          <input
            className="auth-input"
            id="email-input"
            type="email"
            value={this.state.email}
            placeholder="Email address"
            onChange={this.changeState("email")}
          />
          <i className="far fa-envelope input-icon" />
          {this.displayErrors("email")}
        </div>
        <div className="input-wrapper">
          <input
            className="auth-input"
            id="password-input"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.changeState("password")}
          />
          <i className="fas fa-lock input-icon"></i>
        </div>
        {this.displayErrors("password")}
        <div className="flex-end">
          {this.state.showPW ? (
            <button 
              className="teal-link"
              onClick={this.toggleState("showPW")}
            >
              Hide password
            </button>
          ) : (
            <button
              className="teal-link"
              onClick={this.toggleState("showPW")}
            >
              Show password
            </button>
          )}
        </div>
        
        <button
          onClick={this.demoLogin}
          className="pink-button wide-button"
        >
          <span>Demo Login</span>
        </button>
        <button
          className="pink-button wide-button"
          onClick={this.handleSubmit}
        >
          <span>Log in</span>
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="modal-dark-bg">
        <section id="auth-box" className="auth-box">
          <div>
            <button
              className="x-container"
              onClick={this.props.closeComponent}
            >
              <span className="x">X</span>
            </button>          
          </div>
          
          {this.props.formType === "sign up" ? (
            this.displaySignUpOptions()
          ):(
            this.displaySignInOptions()
          )}
          
          {this.props.formType === "sign up" ? (
            <div className="auth-bottom-text">
              Already have a Lairbnb account?&nbsp;
              <button 
                className="teal-link"
                onClick={this.props.switchComponent}
              >
                Log in
              </button>
            </div>
          ):(
            <div className="auth-bottom-text">
              Don't have an account?&nbsp;
              <button
                className="teal-link"
                onClick={this.props.switchComponent}
              >
                Sign up
              </button>
            </div>
          )}
          
        </section>
      </div>
    );
  }
}

export default AuthForm;