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
    this.handlePage = this.handlePage.bind(this);
  }

  handlePage () {
    var pages = this.state;
    for (key in pages) {
      if (pages[key]) {
        return key
      }
    }
  }

  render() {
    var {currentPage} = this.state
    return (
      <div>
        <Dashboard currentPage={currentPage}/>  
      </div>
    )
  }
}

export default App;
