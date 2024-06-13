import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         address: 'Thái Bình',
//         age: ''
//     };

//     handleOnChangeInputName = (event) => {
//         // console.log(event.target.value);
//         this.setState({
//             name: event.target.value
//         });
//     }

//     handleOnChangeInputAge = (event) => {
//         // console.log(event.target.value);
//         this.setState({
//             age: event.target.value
//         });
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();

//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return(
//             <div>
//                 <h1>My name is {this.state.name} and I'm {this.state.age}</h1>
//                 <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
//                     <label>Name: </label>
//                     <input type="text" value={this.state.name} onChange={(event) => {this.handleOnChangeInputName(event)}}/>

//                     <label>Age: </label>
//                     <input type="text" value={this.state.age} onChange={(event) => {this.handleOnChangeInputAge(event)}}/>

//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

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