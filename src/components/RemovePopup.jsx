import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import UserContext from "../Context/UserContext";
const RemovePopup = (props) => {
  const { removeUser } = useContext(UserContext);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h5>Are you sure you want to remove this employee?</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => removeUser()}>Yes</Button>
        <Button className="btn-danger" onClick={props.onHide}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemovePopup;
