import React from 'react';

//import styled-components
import styled from 'styled-components';

//create styled team member card
const Card = styled.div`
    background-color: thistle;
    width: 30%;
    margin: 20px auto;
    border: 1px solid orchid;
    border-radius: 5px;
`

//create card for each team member
function TeamMember(props){
    return (
        <div className='team-container'>
            {props.team.map((teamMember) => {
                return (
                    <Card className='team-member' key={teamMember.id}>
                        <h4>Name: {teamMember.name}</h4>
                        <p>Email: {teamMember.email}</p>
                        <p>Role: {teamMember.role}</p>
                    </Card>
                );
            })}
        </div>
    );
}

export default TeamMember;