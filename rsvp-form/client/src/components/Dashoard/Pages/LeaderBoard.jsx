import React from 'react';
import LeaderBoardEntry from './LeaderBoardEntry.jsx'

class  LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
    }
    this.sortFriendsByScore = this.sortFriendsByScore.bind(this);
  }
  
  sortFriendsByScore () {
    var {name, score, friends} = this.props.profile
    var sortedFriends = [];
    var profile = {name, score}
    const friendsList = [].concat(friends).concat([profile])
      .sort((a, b) => b.score - a.score)
      .map((item) => sortedFriends.push(item))
      return sortedFriends
  }

  render () {
    const sortedFriends = this.sortFriendsByScore();
    return (
      <div className="leaderboard">
        <h1>
          <svg className="ico-cup">
          </svg>
          Leader Board
        </h1>
        <ol>
          {sortedFriends.map((friend, index) =>
            <LeaderBoardEntry key={index} friend={friend}/>
          )}
        </ol>
    </div>
    )
  }
}

export default LeaderBoard;