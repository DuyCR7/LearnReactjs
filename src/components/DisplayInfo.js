import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

// stateless (không có state)
// stateful (có state)

// stateful
// class DisplayInfor extends React.Component {
    
//     state = {
//         isShow: true
//     }
    
//     handleShowHide = () => {
//         this.setState({ 
//             isShow: !this.state.isShow 
//         });
//     }
    
//     render(){
//         // console.log(this.props);
//         // props (properties)
//         const { listUsers } = this.props; // destructuring props
//         // console.log(listUsers);
//         return(
//             <div className='display-infor-container'>
//                 {/* <img src={logo} alt={logo} /> */}
//                 <div>
//                     <button onClick={() => { this.handleShowHide() }}>
//                         { this.state.isShow === true ? 'Hide' : 'Show' }
//                     </button>
//                 </div>
//                 { this.state.isShow && 
//                     <>
//                         { listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={user.age > 21 ? 'green' : 'red'}>
//                                     <div>
//                                         <div>My name is {user.name} </div>
//                                         <div>My age is {user.age} </div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => {this.props.handeleDeleteUser(user.id)}}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         }) }
//                     </> 
//                 }
//             </div>
//         )
//     }
// }


// function component (khi viết 1 component không có state - stateless)
// không cần constructor, không còn this
const DisplayInfor = (props) => {
    const { listUsers } = props; // destructuring props
        return(
            <div className='display-infor-container'>
                { true && 
                    <>
                        { listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 21 ? 'green' : 'red'}>
                                    <div>
                                        <div>My name is {user.name} </div>
                                        <div>My age is {user.age} </div>
                                    </div>
                                    <div>
                                        <button onClick={() => {props.handeleDeleteUser(user.id)}}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        }) }
                    </> 
                }
            </div>
        )
}

export default DisplayInfor;