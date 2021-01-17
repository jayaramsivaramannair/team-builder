import React, {useState} from 'react';
import TeamMembers from './TeamMembers.js';
import Form from './Form.js';
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
      <TeamMembers teamMembers={teamMembers}/>
      <Form/>
    </div>
  );
}

export default App;
