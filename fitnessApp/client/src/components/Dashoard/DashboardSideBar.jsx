import React from 'react';

const DashboardSideBar = (props) => {
  var {changePage} = props;
  return (
    <div className="sidenav">
      <div className="menuheader">Dashboard</div>
      <a classname="sidebar" id="activity" onClick={changePage} >Activity</a>
      <a classname="sidebar" id="leaderboard" onClick={changePage} >Leaders</a>
      <a classname="sidebar" id="workout" onClick={changePage} >Workouts</a>
      <a classname="sidebar" id="settings" onClick={changePage} >Settings</a>
    </div>
  );
}

export default DashboardSideBar;
