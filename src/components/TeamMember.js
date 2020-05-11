import React from 'react';

//create card for each team member
function TeamMember(props){
    return (
        <div className='team-container'>
            {props.team.map((teamMember) => {
                return (
                    <div className='team-member' key={teamMember.id}>
                        <h4>Name: {teamMember.name}</h4>
                        <p>Email: {teamMember.email}</p>
                        <p>Role: {teamMember.role}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default TeamMember;