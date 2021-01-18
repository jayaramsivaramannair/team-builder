import React, {useState} from 'react';
import TeamMembers from './TeamMembers.js';
import Form from './Form.js';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  let initialValues = {
    id : "",
    name: "",
    email: "",
    role: "",
    location: ""
  }

  const[teamMembers, setTeamMembers] = useState([ ]);
  const[formValues, setFormValues] = useState(initialValues);
  const[memberToEdit, setMemberToEdit] = useState(" ");
  const[isEditing, setEditing] = useState(false);

  const setMemberFunction = (evt) => {
      const value = evt.target.value;
      const name = evt.target.name;
      setFormValues({...formValues, [name]: value});
  }

  const editClickFunction = (evt) => {
    const memberId = evt.target.parentNode.getAttribute("data-key");
    setEditing(true);
    teamMembers.forEach((member, index) => {
      if(member.id === memberId) {
        console.log(memberId);
        const copyTeam = [...teamMembers];
        console.log(copyTeam);
        setFormValues({...formValues, name: member.name, role: member.role, location: member.location, email: member.email})
        setMemberToEdit(memberId);
      }
    })
  }


  const addMemberFunction = (evt) => {
    //This will prevent the page from refreshing on pressing submit
    evt.preventDefault();
    if(isEditing) {
      const copyTeam = [...teamMembers];
      copyTeam.forEach((member,index) => {
        if(member.id === memberToEdit) {
          copyTeam[index] = {...copyTeam[index], name: formValues.name, email: formValues.email, role: formValues.role, location: formValues.location};
          console.log(copyTeam);
          setTeamMembers(copyTeam);
        }
      })
    } else {
      const newMember = {
      id : uuidv4(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
      location: formValues.location
      }
      setTeamMembers(teamMembers.concat(newMember));
    }
    setFormValues(initialValues);
    setEditing(false);
  }

  return (
    <div className="App">
      <h1>Product Development Team</h1>
      <Form changeFunction = {setMemberFunction} 
      submitFunction = {addMemberFunction} 
      values = {formValues}/>
      <TeamMembers teamMembers={teamMembers} clickFunction={editClickFunction}/>
    </div>
  );
}

export default App;