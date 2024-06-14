import ModalCreateUser from "./ModalCreateUser";


const ManagaUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">
        <h3>Managa User</h3>
      </div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          Table users
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManagaUser;
