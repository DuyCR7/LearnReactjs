import React, { useState } from "react";

const AddUserInfor = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('Thái Bình');
    const [age, setAge] = useState('');

    const handleOnChangeInputName = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeInputAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }

    return(
        <div>
            <h1>My name is {name} and I'm {age}</h1>
            <form onSubmit={(event) => {handleOnSubmit(event)}}>
                <label>Name: </label>
                <input type="text" value={name} onChange={(event) => {handleOnChangeInputName(event)}}/>

                <label>Age: </label>
                <input type="text" value={age} onChange={(event) => {handleOnChangeInputAge(event)}}/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfor;