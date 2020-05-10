import React from 'react';

function Form(){
    return (
        <form>
            <label htmlFor='name'>Name:</label>
            <input 
                type='text' 
                id='name' 
                name='name' 
                placeholder='Type your full name here...'
            />
            <label>Email:</label>
            <input
                type='text'
                id='email'
                name='email'
                placeholder='Type your email here...'
            />
            <label>Role:</label>
            <input
                type='text'
                id='role'
                name='role'
                placeholder='Type your job title here...'
            />
        </form>
    );
}

export default Form;