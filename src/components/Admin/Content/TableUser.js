import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";

const TableUser = (props) => {
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
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user) => {
              return (
                <tr key={`table-users-${user.id}`}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-sm btn-success">View</button>
                    <button className="btn btn-sm btn-primary mx-3">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <th colSpan={4}>Not found data!</th>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
