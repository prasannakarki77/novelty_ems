import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState(users);
  const [deletePopup, setDeletePopUp] = useState(false);
  const [addPopup, setAddPopup] = useState(false);
  const [updatePopup, setUpdatePopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");

  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    setName(selectedUser.name);
    setEmail(selectedUser.email);
    setPhone(selectedUser.phone);
    setDepartment(selectedUser.department);
    console.log(selectedUser);
  }, [selectedUser]);

  const filterList = (searchText) => {
    let filteredList = users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setUserList(filteredList);
  };

  const addUser = (e) => {
    e.preventDefault();
    let lastUserInList = users[users.length - 1];
    console.log(lastUserInList.id);
    setAddPopup(false);
    let newUser = {
      id: lastUserInList.id + 1,
      name: name,
      email: email,
      phone: phone,
      department: department,
    };
    users.push(newUser);
    setUserList(users);
    toast.success("Employee added successfully!");
  };

  const removeUser = () => {
    setDeletePopUp(false);
    console.log(selectedUser);
    const index = users.findIndex((object) => {
      return object.id === selectedUser.id;
    });

    users.splice(index, 1);
    setUserList(users);
    toast.success("Employee removed successfully!");
  };

  const updateUser = (e) => {
    e.preventDefault();
    const index = users.findIndex((object) => {
      return object.id === selectedUser.id;
    });

    if (name === "") {
      setName(selectedUser.name);
    }
    if (email === "") {
      setEmail(selectedUser.email);
    }
    if (phone === "") {
      setPhone(selectedUser.phone);
    }
    if (department === "") {
      setDepartment(selectedUser.department);
    }
    users[index].name = name;
    users[index].email = email;
    users[index].phone = phone;
    users[index].department = department;
    setUserList(users);
    console.log(selectedUser);

    setUpdatePopup(false);
    toast.success("Updated successfully!");
  };

  const value = {
    userList,
    selectedUser,
    setSelectedUser,
    barChartData,
    LineChartData,
    filterList,
    removeUser,
    setDeletePopUp,
    deletePopup,
    setAddPopup,
    addPopup,
    setPhone,
    setEmail,
    setName,
    setDepartment,
    addUser,
    updateUser,
    updatePopup,
    setUpdatePopup,
    setUserList,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;

// Datas

const users = [
  {
    id: 1,
    name: "Prasanna Karki",
    email: "prasanna.karki77@gmail.com",
    phone: "93423423",
    department: "Frontend",
    password: "Kakashi@77",
    userType: "admin",
  },
  {
    id: 2,
    name: "Rajesh KC",
    email: "rajesh@gmail.com",
    phone: "25325453",
    department: "Backend",
    userType: "employee",
  },
  {
    id: 3,
    name: "Manita Shakya",
    email: "manita@gmail.com",
    phone: "43443434",
    department: "Human Resource",
    userType: "employee",
  },
  {
    id: 4,
    name: "Rijwol Khadka",
    email: "rijwol@gmail.com",
    phone: "234234323",
    department: "Database",
    userType: "employee",
  },
];

const barChartData = [
  { year: "2016", employees: 30 },
  { year: "2017", employees: 50 },
  { year: "2018", employees: 55 },
  { year: "2019", employees: 58 },
  { year: "2020", employees: 35 },
  { year: "2021", employees: 70 },
  { year: "2022", employees: 80 },
];
const LineChartData = [
  { year: "2016", projects: 30 },
  { year: "2017", projects: 50 },
  { year: "2018", projects: 55 },
  { year: "2019", projects: 58 },
  { year: "2020", projects: 35 },
  { year: "2021", projects: 70 },
  { year: "2022", projects: 80 },
];
