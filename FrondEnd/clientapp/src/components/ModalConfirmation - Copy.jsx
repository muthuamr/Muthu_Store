// src/components/CRUDModal.js
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalConfirmation1() {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedItem(null);
    setItemName('');
  };

  const handleAdd = () => {
    setItems([...items, { id: Date.now(), name: itemName }]);
    handleClose();
  };

  const handleEdit = () => {
    if (selectedItem) {
      const updatedItems = items.map((item) =>
        item.id === selectedItem.id ? { ...item, name: itemName } : item
      );
      setItems(updatedItems);
      handleClose();
    }
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem ? 'Edit Item' : 'Add Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          {selectedItem ? (
            <Button variant="success" onClick={handleEdit}>
              Save Changes
            </Button>
          ) : (
            <Button variant="primary" onClick={handleAdd}>
              Add
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <Button
              variant="warning"
              onClick={() => {
                setSelectedItem(item);
                setItemName(item.name);
                handleShow();
              }}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => handleDelete(item.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModalConfirmation1;
