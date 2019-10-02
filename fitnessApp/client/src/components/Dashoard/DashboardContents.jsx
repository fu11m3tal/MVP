import React from 'react';
import LeaderBoard from './Pages/LeaderBoard.jsx'
import ActivityBoard from './Pages/ActivityBoard.jsx'
import WorkoutForm from './Pages/WorkoutForm.jsx'

class DashboardContents extends React.Component {
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
    var { profile, currentPage } = this.props;
    if (currentPage === 'leaderboard') {
      return (
        <div className="leaderboard">
          <LeaderBoard 
            profile={profile} 
            currentPage={currentPage}
          />
        </div>
      )
    }
    if (currentPage === 'activity') {
      return (
        <div className='activity'>
          <ActivityBoard 
            profile={profile}
            currentPage={currentPage}
          />
        </div>
      )
    }
    if (currentPage  === 'workout') {
      return (
        <div className='workout'>
          <WorkoutForm 
            profile={profile}
            currentPage={currentPage}
          />
        </div>
      )
    }
  }
}

export default DashboardContents;