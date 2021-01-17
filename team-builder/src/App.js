import React, {useState} from 'react';
import TeamMembers from './TeamMembers.js';
import Form from './Form.js';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  let initialValues = {
    id : uuidv4(),
    name: "",
    email: "",
    role: "",
    location: ""
  }

  const[teamMembers, setTeamMembers] = useState([ ]);
  const[formValues, setFormValues] = useState(initialValues);

  const setMemberFunction = (evt) => {
      const value = evt.target.value;
      const name = evt.target.name;
      setFormValues({...formValues, [name]: value});
  }

  const addMemberFunction = (evt) => {
    //This will prevent the page from refreshing on pressing submit
    evt.preventDefault();

    const newMember = {
        id : uuidv4(),
        name: formValues.name,
        email: formValues.email,
        role: formValues.role,
        location: formValues.location
    }

    setTeamMembers(teamMembers.concat(newMember));
    setFormValues(initialValues);
  }

  return (
    <div className="App">
      <h1>Product Development Team</h1>
      <Form changeFunction = {setMemberFunction} 
      submitFunction = {addMemberFunction} 
      values = {formValues}/>
      <TeamMembers teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
