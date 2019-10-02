import React from 'react';

const LeaderBoardEntry = (props) => {
  var { username, score } = props.friend
  return (
    <li>
      <mark>{username}</mark>
      <small>{score}</small>
    </li>
  );
}

export default LeaderBoardEntry;