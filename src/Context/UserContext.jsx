import { Children, createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState(users);

  const value = {
    userList,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;

// Datas

const users = [
  {
    name: "Prasanna Karki",
    email: "prasanna.karki77@gmail.com",
    phone: "93423423",
    department: "Frontend",
    password: "Kakashi@77",
    userType: "admin",
  },
  {
    name: "Rajesh KC",
    email: "rajesh@gmail.com",
    phone: "25325453",
    department: "Backend",
    userType: "employee",
  },
  {
    name: "Manita Shakya",
    email: "manita@gmail.com",
    phone: "43443434",
    department: "Human Resource",
    userType: "employee",
  },
  {
    name: "Rijwol Khadka",
    email: "rijwol@gmail.com",
    phone: "234234323",
    department: "Database",
    userType: "employee",
  },
];

const barChartData = [
  { year: "2016", projects: 30 },
  { year: "2017", projects: 50 },
  { year: "2018", projects: 51 },
  { year: "2019", projects: 45 },
  { year: "2020", projects: 10 },
  { year: "2021", projects: 70 },
  { year: "2022", projects: 80 },
];
