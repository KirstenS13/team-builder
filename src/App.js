//import useState
import React, { useState } from 'react';
import './App.css';

//import Form
import Form from './components/Form.js';
//import TeamMember
import TeamMember from './components/TeamMember.js';

function App() {
  //set up state
  //give team a default value (array)
  const [team, setTeam] = useState([]);
  console.log(team);

  //create function that will add new team member to team
  const addNewMember = teamMember => {
    const newMember = {
      id: team.length + 1,
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    }
    setTeam([...team, newMember]);
  }

  //pass setTeam into Form
  return (
    <div className="App">
      {/* Render my team */}
      <h1>My Team</h1>
      <p>Add a new team member</p>
      <Form addNewMember={addNewMember}/>
      <TeamMember team={team}/>
    </div>
  );
}

export default App;
