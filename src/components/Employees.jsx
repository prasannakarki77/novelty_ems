import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill, BsPersonLinesFill } from "react-icons/bs";
import { BiSearchAlt, BiSortAlt2 } from "react-icons/bi";
import RemovePopup from "./RemovePopup";
import Button from "react-bootstrap/Button";
import AddUserForm from "./AddUserForm";
import UpdateForm from "./UpdateForm";
import "../styles/employees.scss";
import logo from "../assets/novelty.svg";
import { Link } from "react-router-dom";
const Employees = () => {
  const {
    userList,
    filterList,
    deletePopup,
    setDeletePopUp,
    setSelectedUser,
    addPopup,
    setAddPopup,
    updatePopup,
    setUpdatePopup,
    selectedUser,
    setUserList,
  } = useContext(UserContext);

  const [order, setOrder] = useState("ASC");
  const sortColumn = (col) => {
    if (order === "ASC") {
      console.log(col);

      const sorted = [...userList].sort((a, b) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setUserList(sorted);
      setOrder("DESC");
    }
    if (order === "DESC") {
      const sorted = [...userList].sort((a, b) =>
        a[col].toString().toLowerCase() < b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setUserList(sorted);
      setOrder("ASC");
    }
  };
  const deleteHandler = (user) => {
    setSelectedUser(user);
    setDeletePopUp(true);
  };
  const addUserHandler = () => {
    setAddPopup(true);
  };

  const updateHandler = (user) => {
    console.log(user);
    setSelectedUser(user);
    console.log(selectedUser);

    setUpdatePopup(true);
  };
  return (
    <div className="epage">
      <RemovePopup show={deletePopup} onHide={() => setDeletePopUp(false)} />
      <AddUserForm show={addPopup} onHide={() => setAddPopup(false)} />
      <UpdateForm show={updatePopup} onHide={() => setUpdatePopup(false)} />
      <Link to="/" className="epage__logo">
        <img src={logo} alt="novelty logo" />
      </Link>

      <h3 className=" epage__heading">
        <BsPersonLinesFill /> Employees
      </h3>
      <div className="epage__actions">
        <div className="epage__search">
          <input
            type="text"
            placeholder="Employee name"
            className="epage__search--box"
            onChange={(e) => filterList(e.target.value)}
          />

          <BiSearchAlt />
        </div>
        <Button
          variant="primary"
          className="my-3 epage__add-btn"
          onClick={addUserHandler}
        >
          Add new Employee
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => sortColumn("id")}>
              Id <BiSortAlt2 />
            </th>
            <th onClick={() => sortColumn("name")}>
              Name <BiSortAlt2 />
            </th>
            <th onClick={() => sortColumn("email")}>
              Email <BiSortAlt2 />
            </th>
            <th onClick={() => sortColumn("phone")}>
              Phone <BiSortAlt2 />
            </th>
            <th onClick={() => sortColumn("department")}>
              Department <BiSortAlt2 />
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.department}</td>
              <td>
                <FaEdit
                  onClick={() => updateHandler(user)}
                  className="edit-btn epage__table--btn"
                />
                <BsTrashFill
                  onClick={() => deleteHandler(user)}
                  className="remove-btn  epage__table--btn"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Employees;
