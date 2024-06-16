import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiServices";
import ModalEditUser from "./ModalEditUser";
import ModalViewUser from "./ModelViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManagaUser = (props) => {

  const LIMIT_USER = 3;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalEditUser, setShowModalEditUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});
  const [dataDelete, setDataDelete] = useState({});

  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    // fetchListUsers();
    fetchListUsersWithPaginate(1);
  }, []);

  const fetchListUsers = async () => {
    let response = await getAllUsers();
    if (response.EC === 0) {
        setListUsers(response.DT);
    }
  }

  const fetchListUsersWithPaginate = async (page) => {
    let response = await getUserWithPaginate(page, LIMIT_USER);
    if (response.EC === 0) {
        setListUsers(response.DT.users);
        setPageCount(response.DT.totalPages);
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

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
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
          {/* <TableUser 
            listUsers={listUsers} 
            handleClickBtnEdit={handleClickBtnEdit}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}

          <TableUserPaginate
            listUsers={listUsers} 
            handleClickBtnEdit={handleClickBtnEdit}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          
        </div>
        <ModalCreateUser 
          showModalCreateUser={showModalCreateUser}
          setShowModalCreateUser={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />

        <ModalEditUser 
          showModalEditUser={showModalEditUser}
          setShowModalEditUser={setShowModalEditUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          />

        <ModalViewUser 
          showModalViewUser={showModalViewUser}
          setShowModalViewUser={setShowModalViewUser}
          dataView={dataView}
          resetViewData={resetViewData}
        />

        <ModalDeleteUser
          showModalDeleteUser={showModalDeleteUser}
          setShowModalDeleteUser={setShowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ManagaUser;
