import React from 'react';

const TeamMember = (props) => {
    const {teamMembers} = props
    return (
        <div id="teamContainer">
            <h3>Current Team Members</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {teamMembers.map((member, index) => {
                        return <tr key={member.id}>
                            <td><em>{`${member.name} `}</em></td>
                            <td><em>{`${member.email} `}</em></td>
                            <td><em>{` ${member.role} `}</em></td>
                            <td><em>{` ${member.location}`}</em></td>
                            <button>Edit</button>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TeamMember;