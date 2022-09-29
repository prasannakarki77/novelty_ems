import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useContext } from "react";

import UserContext from "../Context/UserContext";
function UpdateForm(props) {
  const {
    setName,
    setEmail,
    setPhone,
    setDepartment,
    updateUser,
    selectedUser,
  } = useContext(UserContext);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update employee details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              defaultValue={selectedUser.name}
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter the email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                defaultValue={selectedUser.email}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter phone no."
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                defaultValue={selectedUser.phone}
                required
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the department"
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              defaultValue={selectedUser.department}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateForm;
