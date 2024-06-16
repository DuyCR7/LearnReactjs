import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";

const ManagaUser = (props) => {

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let response = await getAllUsers();
    console.log(response);
    if (response.EC === 0) {
        setListUsers(response.DT);
    }
  }

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
          <TableUser listUsers={listUsers} />
          
        </div>
        <ModalCreateUser 
          showModalCreateUser={showModalCreateUser}
          setShowModalCreateUser={setShowModalCreateUser}
          fetchListUsers={fetchListUsers} />
      </div>
    </div>
  );
};

export default ManagaUser;
