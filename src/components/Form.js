//set up file by importing React and useState
import React, { useState } from 'react';

function Form(){
    //create state for each new entry
    const [teamMember, setTeamMember] = useState();

    //set up the form with labels and inputs
    return (
        <form>
            <label htmlFor='name'>Name:</label>
            <input 
                type='text' 
                id='name' 
                name='name' 
                placeholder='Enter full name here...'
            />
            <label htmlFor='email'>Email:</label>
            <input
                type='text'
                id='email'
                name='email'
                placeholder='Enter email here...'
            />
            <label htmlFor='role'>Role:</label>
            <input
                type='text'
                id='role'
                name='role'
                placeholder='Enter job title here...'
            />
            <button type='submit'>Add Team Member</button>
        </form>
    );
}

//export Form as default
export default Form;