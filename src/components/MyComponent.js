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
    }

    // JSX
    render() {
        return (
            <div>
                <h1>My name is {this.state.name} from {this.state.address}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default MyComponent;