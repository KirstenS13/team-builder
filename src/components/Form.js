//set up file by importing React and useState
import React, { useState } from 'react';

//import styled-components
import styled from 'styled-components';

//create styled form so I can use flex
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: auto;
`

//create styled label
const StyledLabel = styled.label`
    padding: 10px 0;
    text-align: left;
    font-size: 1.2rem;
`

//create styled input
const StyledInput = styled.input`
    padding: 5px 0;
    font-size: 0.9rem;
`

//create styled button
const Button = styled.button`
    margin: 30px auto;
    padding: 5px 0;
    width: 50%;
    border-radius: 5px;
    font-size: 0.9rem;
`

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
        <StyledForm onSubmit={submitForm}>
            <StyledLabel htmlFor='name'>Name:</StyledLabel>
            <StyledInput 
                onChange={handleChanges}
                type='text' 
                id='name' 
                name='name' 
                placeholder='Enter full name here...'
                value={teamMember.name}
            />
            <StyledLabel htmlFor='email'>Email:</StyledLabel>
            <StyledInput
                onChange={handleChanges}
                type='text'
                id='email'
                name='email'
                placeholder='Enter email here...'
                value={teamMember.email}
            />
            <StyledLabel htmlFor='role'>Role:</StyledLabel>
            <StyledInput
                onChange={handleChanges}
                type='text'
                id='role'
                name='role'
                placeholder='Enter job title here...'
                value={teamMember.role}
            />
            <Button type='submit'>Add Team Member</Button>
        </StyledForm>
    );
}

//export Form as default
export default Form;