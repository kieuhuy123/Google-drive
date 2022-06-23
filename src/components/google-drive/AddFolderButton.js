import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { database } from "../../firebase";
import { addDoc } from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";

const AddFolderButton = ({ currentFolder }) => {
  const { currentUser } = useAuth();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentFolder == null) return;
    //TODO: Create a folder in the database
    setLoading(true);
    try {
      const docRef = await addDoc(database.folders, {
        name: name,
        parentId: currentFolder.id,
        userId: currentUser.uid,
        // path,
        createAt: database.getCurrentTimestamp,
      });

      console.log("Document written with ID: ", docRef.id);
      setLoading(false);
    } catch (err) {
      console.error("Error adding document: ", err);
      setLoading(false);
    }
    setName("");
    closeModal();
  };
  return (
    <>
      <Button onClick={openModal} variant="outline-success">
        <FontAwesomeIcon icon={faFolderPlus} />
      </Button>

      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={handleChangeName}
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button
              variant="success"
              type="submit"
              disabled={loading ? true : false}
            >
              {loading ? "Loading..." : "Add Folder"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddFolderButton;
