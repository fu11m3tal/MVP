import React from 'react';
import DashboardSideBar from './DashboardSideBar.jsx'
import DashboardContents from './DashboardContents.jsx'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "Steven",
        score: 2000,
        friends: [{name: "Ryan", score: 5}, {name: "Alvin", score: 189}, {name: "Jared", score: 190}, {name: "Jesse", score: -5}]
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
    var profile = this.state;
    var { currentPage } = this.props;
    if (currentPage === 'leaderboard') {
      return (
        <div className="dashboard">
          <div className="navbar">
            <DashboardSideBar/>
          </div>
          <div className="dashboardbody">
            <div className="title">
              <h1>Dashboard</h1>
            </div>
          </div>
          <DashboardContents 
            profile={profile}
            currentPage={currentPage}
          />
        </div>
      )
    }
  }
}

export default Dashboard;