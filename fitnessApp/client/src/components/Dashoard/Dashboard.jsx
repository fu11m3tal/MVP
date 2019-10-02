import React from 'react';
import DashboardSideBar from './DashboardSideBar.jsx'
import DashboardContents from './DashboardContents.jsx'
import axios from 'axios';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        seconds: '',
        firstName: "Steven",
        lastName: "Yoh",
        username: "fu11m3tal",
        score: 2000,
        dailyGoal: 500,
        friends: []
      }
      this.getAllAccounts =  this.getAllAccounts.bind(this);
      this.postAccount = this.postAccount.bind(this);
      this.postWorkout = this.postWorkout.bind(this);
      this.getRandomNum = this.getRandomNum.bind(this);
      this.getRandomUser - this.getRandomUser.bind(this)
  }
  getAllAccounts () {
    axios.get('/api/account/')
    .then(account => {
      this.setState({
        friends: account.data
      })
    })
  }

  getAccount () {
    axios.post('/api/account/:username')
    .then(account => {
      console.log('success')
    })
    .catch(err => {
      console.log(err)
    })
  }

  postAccount (account) {
    axios.post('/api/account', account)
    .then(account => {
      console.log("account created")
    })
    .catch(err => {
      console.log(err)
    })
  }

  getRandomNum (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomUser (index) {
    var users =  ['fu11m3tal', 'Rzzzzzzz', 'ALVINNNNNNN', 'SFNecks', 'ForestMan']
    return users[index]
  }

  postWorkout (username, score) {
    axios.put('/api/account/workout', { username, score })
    .then(response => {
      axios.get('/api/account/')
      .then(account => {
        console.log(this.state)
        this.setState({
          friends: account.data
        })
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getAllAccounts();
  }

  render() {
    var profile = this.state;
    var { currentPage, changePage } = this.props;
    return (
      <div className="dashboard">
        <div className="navbar">
          <DashboardSideBar 
            changePage={changePage}
          />
        </div>
        <div className="dashboardbody">
          <div className="title">
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

export default Dashboard;