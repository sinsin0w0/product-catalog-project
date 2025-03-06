// src/components/ProductModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Image from './Image';

const ProductModal = ({ show, handleClose, product }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Image
          src={product?.imageUrl || 'imageMissing.png'}
          alt={product?.name}
          style={{ width: '100%', height: 'auto' , minHeight:'100px' }}  // Set the size of the image
        />
        <p><strong>Description:</strong> {product?.description}</p>
        <p><strong>Price:</strong> ${product?.price}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
