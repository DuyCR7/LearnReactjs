import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const TableUserPaginate = (props) => {
    const { listUsers, pageCount } = props;

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        props.fetchListUsersWithPaginate(+event.selected + 1);
        props.setCurrentPage(event.selected + 1);
        // console.log(`User requested page number ${event.selected}`);
    };
  
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
                      <button 
                        className="btn btn-sm btn-success"
                        onClick={() => props.handleClickBtnView(user)}
                        >View
                      </button>
                      <button 
                        className="btn btn-sm btn-primary mx-3"
                        onClick={() => props.handleClickBtnEdit(user)}
                        >Edit
                      </button>
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => props.handleClickBtnDelete(user)}
                        >Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            {listUsers && listUsers.length === 0 && (
              <tr>
                <th colSpan={5}>Not found data!</th>
              </tr>
            )}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
            <ReactPaginate
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< Prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={props.currentPage - 1}
            />
        </div>
      </>
    );
  };
  
  export default TableUserPaginate;
  