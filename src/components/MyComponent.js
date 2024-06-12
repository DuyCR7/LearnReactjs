import React from "react";
import AddUserInfor from "./AddUserInfor";
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

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handeleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }

    // JSX
    render() {
        return (
            <>
                <div className='a'>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser} //Không dùng () vì nó sẽ hiểu là thực thi hàm ngay tại đây
                    />
                    <br />
                    <DisplayInfor 
                        listUsers={this.state.listUsers}
                        handeleDeleteUser={this.handeleDeleteUser}
                    />
                </div>
                <div className='b'>

                </div>
            </>
            
        );
    }
}

export default MyComponent;