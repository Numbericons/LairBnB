import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.showErrors = this.showErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearErrors();
    this.props.login(this.state)
  }

  changeInput(key) {
    return (event) => {
      this.setState({ [key]: event.target.value })
    }
  }

  showErrors(key) {
    let errors = this.props.errors[key];
    const input = document.getElementById(`${key}-input`);
    if (errors) {
      input.classList.add("red-border")
      return <span>- {errors}</span>
    } else if (label && input) {
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
  };

  render() {
    return (
      <div className="modal-dark-bg">
        <section id={formType} className="auth-box box-on-bg">
          <button>
            Log in with Facebook
          </button>
          <button>
            Log in with Google
          </button>


          <form onSubmit={this.handleSubmit}>
            <input
              id="email-input"
              type="email"
              value={this.state.email}
              placeholder="Email address"
              onChange={this.changeInput("email")} 
            />
            {this.showErrors("email")}

            <input 
              id="first_name-input"
              type="text"
              value={this.state.first_name}
              placeholder="First name"
              onChange={this.changeInput("first_name")} 
            />
            {this.showErrors("first_name")}

            <input
              id="last_name-input"
              type="text"
              value={this.state.last_name}
              placeholder="Last name"
              onChange={this.changeInput("last_name")}
            />
            {this.showErrors("last_name")}

            <input
              id="password-input"
              type="password"
              value={this.state.password}
              placeholder="Create a Password"
              onChange={this.changeInput("password")}
            />
            {this.showErrors("password")}

            <button id="demo-login" onClick={this.demoLogin}>Demo Login</button>

            <input type="submit" value="Sign up"/>

            Already have a Lairbnb account?&nbsp;
            <button>Log in</button>
          </form>
          
        </section>
      </div>
    );
  }
}

export default SignupForm;