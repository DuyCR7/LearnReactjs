import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Duy Yêu',
        address: 'Thái Bình',
        age: '20'
    };

    // JSX
    render() {
        return (
            <div>
                <h1>My name is {this.state.name} from {this.state.address}</h1>
            </div>
        );
    }
}

export default MyComponent;