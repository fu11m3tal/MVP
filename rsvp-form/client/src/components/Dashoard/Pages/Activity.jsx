import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
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
      })
    })
  }

  render() {
    return (
      <div className="">
      </div>
    )
  }
}

export default Dashboard;