import React from 'react';

const Form = (props) => {
    const{changeFunction, submitFunction, values} = props;
    const{name, email, role, location} = values;

     return (
        <div>
            <h3>Enter Team Member Information Below:</h3>
            <form onSubmit={(evt) => submitFunction(evt)}>
                <label>
                    Name:
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(evt) => changeFunction(evt)}
                    placeholder="Full Name"
                    />
                </label>
                <label>
                    E-Mail:
                    <input
                    placeholder="Email Address"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(evt) => changeFunction(evt)}
                    />
                </label>
                <label>
                    Role:
                    <select
                        name="role"
                        value={role}
                        onChange={(evt) => changeFunction(evt)}
                    >
                        <option value="">Select Member Role</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Engineering Manager">Engineering Manager</option>
                        <option value="UX Designer">UX Designer</option>
                        <option value="iOS Engineer">iOS Engineer</option>
                        <option value="Data Scientist">Data Scientist</option>
                    </select>
                </label>
                <label>
                    Location:
                    <input
                    placeholder="Member Location"
                    type="text"
                    name="location"
                    value={location}
                    onChange={changeFunction}
                    />
                </label>
                <button disabled={(!values.name) || (!values.email) || (!values.role) || (!values.location)}>Submit</button>
            </form>
        </div>
    );
}

export default Form;