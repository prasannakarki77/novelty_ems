import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import UserContext from "../Context/UserContext";
import { toast } from "react-toastify";

const Login = () => {
  const { userList } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordReq, setPasswordReq] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    );
    if (!regex.test(password)) {
      setPasswordReq(
        "Password must be at least 8 characters long, must contain at least 1 uppercase letters, 1 special characters"
      );
    } else {
      const verifyUser = userList.find(
        (user) => user.email === email && user.password === password
      );

      console.log(verifyUser);
      if (verifyUser) {
        localStorage.setItem("currentUser", verifyUser.name);
        window.location.replace("/dashboard");
      } else {
        toast.error("Invalid credentials!! Try again.");
      }
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text className="text-danger text-sm">{passwordReq}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
