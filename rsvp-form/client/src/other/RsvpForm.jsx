import React from 'react';

class RsvpForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        numberOfGuest: ''
      }
      this.onChange = this.onChange.bind(this);
      this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  onClick () {
    this.props.submitRsvp(this.state, () => {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        numberOfGuest: ''
      })
    })
  }

  render() {
    return (
      <div className="rsvp-form">
        <h2>RSVP</h2>
          <label>First Name: </label>
          <input
            type="text"
            id="firstName"
            onChange={this.onChange}
            value={this.state.firstName}>
          </input>
          <label>Last Name: </label>
          <input
            type="text"
            id="lastName"
            onChange={this.onChange}
            value={this.state.lastName}>
          </input>
          <label>Email: </label>
          <input
            type="text"
            id="email"
            onChange={this.onChange}
            value={this.state.email}>
          </input>
          <select onChange={this.onChange} id="numberOfGuest">
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button className="rsvp" onClick={this.onClick}>RSVP</button>
      </div>
    )
  }
}

export default RsvpForm;