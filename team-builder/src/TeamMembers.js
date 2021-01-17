import React from 'react';

const TeamMember = (props) => {
    const {teamMembers} = props
    return (
        <div id="teamContainer">
            <h1>Current Team Members On The Team</h1>
            <span>{`Name`}</span>
            <span>{`Email`}</span>
            <span>{`Role`}</span>
            {teamMembers.map((member, index) => {
                return <div key={member.id}>
                    <span>{`${member.name}`}</span>
                    <span>{`${member.email}`}</span>
                    <span>{`${member.role}`}</span>
                </div>
            })}
        </div>
    )
}

export default TeamMember;