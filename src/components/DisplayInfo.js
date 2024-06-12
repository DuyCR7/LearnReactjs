import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

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
            <div className='display-infor-container'>
                <img src={logo} alt={logo} />
                <div>
                    <button onClick={() => { this.handleShowHide() }}>
                        { this.state.isShow === true ? 'Hide' : 'Show' }
                    </button>
                </div>
                { this.state.isShow && 
                    <>
                        { listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 21 ? 'green' : 'red'}>
                                    <div>My name is {user.name} </div>
                                    <div>My age is {user.age} </div>
                                    <hr />
                                </div>
                            )
                        }) }
                    </> 
                }
            </div>
        )
    }
}

export default DisplayInfor;