import React from "react";

class DisplayInfor extends React.Component {
    render(){
        // console.log(this.props);
        // props (properties)
        const { listUsers } = this.props; // destructuring props
        console.log(listUsers);
        return(
            <div>
                { listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name} </div>
                            <div>My age is {user.age} </div>
                            <hr />
                        </div>
                    )
                }) }
            </div>
        )
    }
}

export default DisplayInfor;