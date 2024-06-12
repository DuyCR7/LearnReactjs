import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfo";

class MyComponent extends React.Component {
    // JSX
    render() {
        const myInfor = ['dz', 'ít tiền', 'cris'];

        return (
            <div>
                <UserInfor/>
                <br />
                <DisplayInfor name='Siu k3p' age='22'/>
                <hr />
                <DisplayInfor name='Cristiano' age='39' dz={true} myInfor={myInfor}/>
            </div>
        );
    }
}

export default MyComponent;