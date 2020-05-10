//import useState
import React, { useState } from 'react';
import './App.css';

function App() {
  //set up state
  //give team a default value (object)
  const [team, setTeam] = useState({});

  return (
    <div className="App">
      {/* Render my team */}
      <h1>My Team</h1>
    </div>
  );
}

export default App;
