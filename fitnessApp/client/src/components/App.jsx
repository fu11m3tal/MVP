import React from 'react';
import axios from 'axios'
import RegisterForm from './Account/RegisterForm.jsx'
import LoginForm from './Account/LoginForm.jsx';
import Dashboard from './Dashoard/Dashboard.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      currentPage: "leaderboard"
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage () {
    console.log(event.target.href)
    this.setState({
      currentPage: event.target.id,
    });
  }

  render() {
    var { currentPage } = this.state
    return (
      <div>
        <Dashboard 
          changePage={this.changePage} 
          currentPage={currentPage}
        />  
      </div>
    )
  }
}

export default App;
