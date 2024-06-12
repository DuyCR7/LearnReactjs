import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {
                id: 1,
                name: 'Duy',
                age: 20
            },
            {
                id: 2,
                name: 'Siu',
                age: 22
            },
            {
                id: 3,
                name: 'Cristiano',
                age: 39
            }
        ]
    }

    // JSX
    render() {
        return (
            <div>
                <UserInfor/>
                <br />
                <DisplayInfor listUsers={this.state.listUsers}/>
            </div>
        );
    }
}

export default MyComponent;