import React from "react";


const Form = (props) => {

    const changeHandler = event => {
        const {name, value} = event.target;
        props.change(name, value);
    }

    const submitHandler = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <div className="members">
            <form onSubmit={submitHandler}>
                <label>
                    Name:
                    <input 
                    type="text"
                    value={props.values.name}
                    name="name"
                    onChange={changeHandler}
                    />
                </label>
                <label>
                    Email: 
                    <input
                    type="text"
                    value={props.values.email}
                    name="email"
                    onChange={changeHandler}
                    />
                </label>
                <label>
                    Role:
                    <input
                    type="text"
                    value={props.values.role}
                    name="role"
                    onChange={changeHandler}
                    />
                </label>
                <input 
                type="submit"
                value='Create Team!'
                />
            </form>
        </div>
    )
}

export default Form;