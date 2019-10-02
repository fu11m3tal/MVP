import React from 'react';

const WorkoutForm = (props) => {
  return (
    <div>
      <form className="workoutform">
        <br></br>
        <h2>Session</h2>
        <br></br>
        <br></br>
        <label for="steplabel">Steps</label>
        <select id="steps">
          <option value="0">0</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">10</option>
        </select>
        <input type="submit" value="Submit"></input>
        
      </form>
    </div>
  );
}

export default WorkoutForm;