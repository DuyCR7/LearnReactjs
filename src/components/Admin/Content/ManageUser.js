import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
import ModalEditUser from "./ModalEditUser";
import ModalViewUser from "./ModelViewUser";

const ManagaUser = (props) => {

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalEditUser, setShowModalEditUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});

  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let response = await getAllUsers();
    if (response.EC === 0) {
        setListUsers(response.DT);
    }
  }

  const handleClickBtnEdit = (user) => {
    setShowModalEditUser(true);
    setDataUpdate(user);
  }

  const resetUpdateData = () => {
    setDataUpdate({});
  }

  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setDataView(user);
  }

  const resetViewData = () => {
    setDataView({});
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
          <TableUser 
            listUsers={listUsers} 
            handleClickBtnEdit={handleClickBtnEdit}
            handleClickBtnView={handleClickBtnView}
          />
          
        </div>
        <ModalCreateUser 
          showModalCreateUser={showModalCreateUser}
          setShowModalCreateUser={setShowModalCreateUser}
          fetchListUsers={fetchListUsers} />

        <ModalEditUser 
          showModalEditUser={showModalEditUser}
          setShowModalEditUser={setShowModalEditUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
          />

        <ModalViewUser 
          showModalViewUser={showModalViewUser}
          setShowModalViewUser={setShowModalViewUser}
          dataView={dataView}
          resetViewData={resetViewData}
        />
      </div>
    </div>
  );
};

export default ManagaUser;
