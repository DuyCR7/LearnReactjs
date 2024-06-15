import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";

const ManagaUser = (props) => {

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">
        <h3>Managa User</h3>
      </div>
      <div className="users-content">
        <div className="btn-add-new">
          <button className="btn btn-sm btn-primary" onClick={() => setShowModalCreateUser(true)}>
            <FcPlus />
            Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser />
          
        </div>
        <ModalCreateUser 
          showModalCreateUser={showModalCreateUser}
          setShowModalCreateUser={setShowModalCreateUser} />
      </div>
    </div>
  );
};

export default ManagaUser;
