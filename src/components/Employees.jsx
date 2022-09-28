import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
const Employees = () => {
  const { userList, filterList } = useContext(UserContext);

  return (
    <div>
      <div>Employees</div>

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
                <BsTrashFill />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Employees;
