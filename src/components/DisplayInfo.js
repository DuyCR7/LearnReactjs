import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

// function component (khi viết 1 component không có state - stateless)
// không cần constructor, không còn this
const DisplayInfor = (props) => {
    const { listUsers } = props; // destructuring props

    // useState trả ra 2 tham số
    // tham số đầu tiên là state ta khai báo
    // tham số thứ hai là hàm để cập nhật state
    // khai báo là const để state chỉ có thể thay đổi khi gọi thông qua setShowHide
    // destructuring
    const [isShow, setShowHide] = useState(true);

    const handleShowHide = () => {
        setShowHide(!isShow);
    }

        return(
            <div className='display-infor-container'>
                <div>
                    <button onClick={() => { handleShowHide() }}>
                       { isShow === true ? 'Hide' : 'Show' }
                    </button>
                </div>
                { isShow && 
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