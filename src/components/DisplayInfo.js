import React from "react";

class DisplayInfor extends React.Component {
    
    state = {
        isShow: true
    }
    
    handleShowHide = () => {
        this.setState({ 
            isShow: !this.state.isShow 
        });
    }
    
    render(){
        // console.log(this.props);
        // props (properties)
        const { listUsers } = this.props; // destructuring props
        // console.log(listUsers);
        return(
            <div>
                <div>
                    <button onClick={() => { this.handleShowHide() }}>
                        { this.state.isShow === true ? 'Hide' : 'Show' }
                    </button>
                </div>
                { this.state.isShow && 
                    <div>
                        { listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 21 ? 'green' : 'red'}>
                                    <div>My name is {user.name} </div>
                                    <div>My age is {user.age} </div>
                                    <hr />
                                </div>
                            )
                        }) }
                    </div> 
                }
            </div>
        )
    }
}

export default DisplayInfor;