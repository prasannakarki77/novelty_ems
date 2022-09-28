import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import RemovePopup from "./RemovePopup";
import Button from "react-bootstrap/Button";
import AddUserForm from "./AddUserForm";
import UpdateForm from "./UpdateForm";

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
    setName,
  } = useContext(UserContext);

  const deleteHandler = (user) => {
    setSelectedUser(user);
    setDeletePopUp(true);
  };
  const addUserHandler = () => {
    setAddPopup(true);
  };
  const updateHandler = (user) => {
    setSelectedUser(user);
    setName(selectedUser.name);
    console.log(selectedUser.name);
    setUpdatePopup(true);
  };
  return (
    <div className="m-5">
      <RemovePopup show={deletePopup} onHide={() => setDeletePopUp(false)} />
      <AddUserForm show={addPopup} onHide={() => setAddPopup(false)} />
      <UpdateForm show={updatePopup} onHide={() => setUpdatePopup(false)} />
      <div>Employees</div>
      <Button variant="primary" className="my-3" onClick={addUserHandler}>
        Add new Employee
      </Button>
      <div className="search__field">
        <input
          type="text"
          placeholder="Search Vehicle"
          className="search__box"
          onChange={(e) => filterList(e.target.value)}
        />

        <BiSearchAlt />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.department}</td>
              <td>
                <FaEdit onClick={() => updateHandler(user)} />
                <BsTrashFill onClick={() => deleteHandler(user)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Employees;
