import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteProduct = ({ showModal, handleCloseModal, productId }) => {
  const [error, setError] = useState(null);

  const deleteProduct = () => {
    axios.delete(`https://fakestoreapi.com/products/${productId}`)
      .then(() => {
        alert('Product deleted successfully!');
        window.location.href = '/products'; 
      })
      .catch((error) => {
        setError(`Failed to delete product: ${error.message}`);
      });
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this product?</p>
          {error && <p className="text-danger">{error}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            No
          </Button>
          <Button variant="danger" onClick={deleteProduct}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteProduct;
