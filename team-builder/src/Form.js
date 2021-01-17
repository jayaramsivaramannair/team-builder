import React from 'react';

const Form = (props) => {

    return (
        <div class="formContainer">
            <form>
                <label>
                    Name:
                    <input
                    type="text"
                    />
                </label>
                <label>
                    E-Mail:
                    <input
                    type="text"
                    />
                </label>
                <label>
                    Role:
                    <select>
                        <option>Backend Engineer</option>
                        <option>Frontend Engineer</option>
                        <option>Engineering Manager</option>
                        <option>UX Designer</option>
                        <option>Data Scientist</option>
                    </select>
                </label>
                <label>
                    Location:
                    <input
                    type="text"
                    />
                </label>
            </form>
        </div>
    );
}

export default Form;