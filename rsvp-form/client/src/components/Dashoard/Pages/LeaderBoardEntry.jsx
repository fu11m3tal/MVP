import React from 'react';

const LeaderBoardEntry = (props) => {
  var { name, score } = props.friend
  return (
    <li>
      <mark>{name}</mark>
      <small>{score}</small>
    </li>
  );
}

export default LeaderBoardEntry;