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

    // JSX
    render() {
        return (
            <div>
                <h1>My name is {this.state.name} and I'm {this.state.age}</h1>
                <button onClick={(event) => { this.handleClick(event) }}>Click</button>
            </div>
        );
    }
}

export default MyComponent;