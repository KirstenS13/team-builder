//import useState
import React, { useState } from 'react';
import './App.css';

//import Form
import Form from './components/Form.js';

function App() {
  //set up state
  //give team a default value (object)
  const [team, setTeam] = useState({});

  return (
    <div className="App">
      {/* Render my team */}
      <h1>My Team</h1>
      <Form/>
    </div>
  );
}

export default App;
