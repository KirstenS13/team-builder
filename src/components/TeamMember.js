import React from 'react';

function TeamMember(props){
    return (
        <div>
            {props.team.map((teamMember) => {
                return (
                    <div>
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