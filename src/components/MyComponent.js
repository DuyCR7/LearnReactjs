import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Duy Yêu',
        address: 'Thái Bình',
        age: '20'
    };

    handleClick(event){
        // console.log('>> Clicked');
        console.log(event);

        this.setState({
            name: 'Duy dz',
            age: Math.floor((Math.random() * 100) + 1)
        });
    }

    handleOnChangeInput = (event) => {
        // console.log(event.target.value);
        this.setState({
            name: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    // JSX
    render() {
        return (
            <div>
                <h1>My name is {this.state.name} and I'm {this.state.age}</h1>
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <input type="text" onChange={(event) => {this.handleOnChangeInput(event)}}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;