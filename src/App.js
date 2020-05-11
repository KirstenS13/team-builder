//import useState
import React, { useState } from 'react';
import './App.css';

//import Form
import Form from './components/Form.js';

function App() {
  //set up state
  //give team a default value (object)
  const [team, setTeam] = useState({});

  //create function that will add new team member to team
  const addNewMember = teamMember => {
    setTeam([...team, teamMember]);
  }

  //pass setTeam into Form
  return (
    <div className="App">
      {/* Render my team */}
      <h1>My Team</h1>
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
