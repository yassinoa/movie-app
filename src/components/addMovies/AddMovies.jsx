import React, { useState } from 'react'
import './AddMovies.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

const AddMovies = ({handleSub, namef, imgf, datef, ratef, handlenamef, handleimgf, handledatef, handleratef}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='divb'>
      <div className="addd">

        
        <Button className='but col' onClick={handleShow}>
        Add Movies
      </Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSub}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name :</Form.Label>
        <Form.Control type="text" value={namef} placeholder="Name" onChange={handlenamef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image :</Form.Label>
        <Form.Control type="text" value={imgf} placeholder="pathaan.jpg" onChange={handleimgf} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date :</Form.Label>
        <Form.Control type="text" value={datef} placeholder="November 2020" onChange={handledatef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate :</Form.Label>
        <Form.Control type="number" value={ratef}  max="5" min="1"  onChange={handleratef}/>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}

export default AddMovies