import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ActivityBoardEntry = (props) => {
  var { category, score, goal } = props.category;
  return (
      <li>
        <h2 className="progressbar-title">{category}: {score}/{goal}</h2>
        <ProgressBar variant="success" now={score * 100 /goal}/>
      </li>

  );
}

export default ActivityBoardEntry;