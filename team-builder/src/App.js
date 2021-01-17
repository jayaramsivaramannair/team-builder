import React, {useState} from 'react';
import TeamMembers from './TeamMembers.js';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  let initialValues = {
    id : " ",
    name: " ",
    email: " ",
    role: " ",
  }

  const[teamMembers, setTeamMembers] = useState([initialValues]);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <TeamMembers teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
