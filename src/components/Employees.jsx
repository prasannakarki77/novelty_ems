import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import RemovePopup from "./RemovePopup";
import Button from "react-bootstrap/Button";
import AddUserForm from "./AddUserForm";

const Employees = () => {
  const {
    userList,
    filterList,
    deletePopup,
    setDeletePopUp,
    setSelectedUser,
    addPopup,
    setAddPopup,
  } = useContext(UserContext);

  const [user, setUser] = useState({});
  const deleteHandler = (user) => {
    setUser(user);
    setDeletePopUp(true);
  };
  const addUserHandler = () => {
    setAddPopup(true);
  };
  return (
    <div className="m-5">
      <RemovePopup
        show={deletePopup}
        onHide={() => setDeletePopUp(false)}
        user={user}
      />
      <AddUserForm show={addPopup} onHide={() => setAddPopup(false)} />
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
                <FaEdit />
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
