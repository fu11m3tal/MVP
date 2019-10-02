import React from 'react';
import ActivityBoardEntry from './ActivityBoardEntry.jsx'


class ActivityBoard extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        categories: [
          { category: "Daily", 
            score: 20,
            goal: 100,
          }, 
          { category: "Weekly", 
            score: 550,
            goal: 1000
          }, 
          { category: "Monthly", 
            score: 8000,
            goal: 10000
          }
        ]
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

  componentDidMount () {
    
  }
  
  render() {
    var {categories} = this.state
    var { name, score, friends } = this.props.profile
    return (
      <div className="activityboard">
        <div className="activityranking">
          <h1>
            <svg className="ico-cup">
            </svg>
            Ranking
          </h1>
          
          <ol>
            <li>
              <h2 className="progressbar-title">Score: {score}</h2>
            </li>
            <li>
              <h2 className="progressbar-title">Rank: 1st</h2>
            </li>
          </ol>
        </div>

        <div className="activitygoals">
          <h1>
            <svg className="ico-cup">
            </svg>
            Steps
          </h1>
          
          <ol>
            {categories.map((category, index) =>
              <ActivityBoardEntry key={index} category={category}/>
            )}
          </ol>
        </div>
      </div>
      
    )
  }
}

export default ActivityBoard;
