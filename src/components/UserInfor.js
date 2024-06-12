import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Duy Yêu',
        address: 'Thái Bình',
        age: '20'
    };

    handleOnChangeInputName = (event) => {
        // console.log(event.target.value);
        this.setState({
            name: event.target.value
        });
    }

    handleOnChangeInputAge = (event) => {
        // console.log(event.target.value);
        this.setState({
            age: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <h1>My name is {this.state.name} and I'm {this.state.age}</h1>
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <label>Name: </label>
                    <input type="text" value={this.state.name} onChange={(event) => {this.handleOnChangeInputName(event)}}/>

                    <label>Age: </label>
                    <input type="text" value={this.state.age} onChange={(event) => {this.handleOnChangeInputAge(event)}}/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;