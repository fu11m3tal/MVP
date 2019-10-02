import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        email: '',
        password: 1,
        passwordHidden: ""
      }
      this.onChange = this.onChange.bind(this);
      this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    if(event.target.id === "password")  {
      var hash = "*";
      for (var i = 0; i < this.state.password.length; i++) {
        hash+= "*"
      }
      this.setState({
        [event.target.id]: event.target.value,
        passwordHidden: hash
      });
    } else {
      this.setState({
        [event.target.id]: event.target.value,
      });
    }
  }

  onClick () {
    this.props.submitRsvp(this.state, () => {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        numberOfGuest: 1
      })
    })
  }

  render() {
    return (
      <div className="rsvp-form">
        <h2>Login</h2>
          <label>Email: </label>
          <input
            type="text"
            id="email"
            onChange={this.onChange}
            value={this.state.email}>
          </input>
          <label>Password: </label>
          <input
            type="text"
            id="password"
            onChange={this.onChange}
            value={this.state.passwordHidden}>
          </input>
          <button className="login" onClick={this.onClick}>Login</button>
      </div>
    )
  }
}

export default LoginForm;