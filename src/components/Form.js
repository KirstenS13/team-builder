//set up file by importing React and useState
import React, { useState } from 'react';

function Form(props){
    //create state for each new entry
    //set default state as an object with keys for each input
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    });
    console.log(teamMember);

    //create a function that will add user input to state
    const handleChanges = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    };

    //create a function that will add new team member to the team state in App.js
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(teamMember);
        setTeamMember({name: '', email: '', role: ''});
    }

    //set up the form with labels and inputs
    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name:</label>
            <input 
                onChange={handleChanges}
                type='text' 
                id='name' 
                name='name' 
                placeholder='Enter full name here...'
                value={teamMember.name}
            />
            <label htmlFor='email'>Email:</label>
            <input
                onChange={handleChanges}
                type='text'
                id='email'
                name='email'
                placeholder='Enter email here...'
                value={teamMember.email}
            />
            <label htmlFor='role'>Role:</label>
            <input
                onChange={handleChanges}
                type='text'
                id='role'
                name='role'
                placeholder='Enter job title here...'
                value={teamMember.role}
            />
            <button type='submit'>Add Team Member</button>
        </form>
    );
}

//export Form as default
export default Form;