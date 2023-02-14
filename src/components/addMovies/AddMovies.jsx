import React, { useRef, useState } from 'react'
import './AddMovies.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add_mv } from '../../redux/action';
//{handleSub, namef, imgf, datef, ratef, handlenamef, handleimgf, handledatef, handleratef}
const AddMovies = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch=useDispatch()
  const inputName= useRef();
  const inputImg= useRef();
  const inputDate= useRef();
  const inputRate= useRef();


  const handleSub=(e)=>{
         e.preventDefault();
    //     setMovi([...movi,{id:Math.random(),name:namef, img:imgf ,date:datef ,ratev:ratef}])
    dispatch(add_mv({id:Math.random(),name:inputName.current.value, img:inputImg.current.value ,date:inputDate.current.value ,ratev:inputRate.current.value}))
    setShow(false);    
  }
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
        <Form.Control type="text"  placeholder="Name"  ref={inputName}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image :</Form.Label>
        <Form.Control type="text"  placeholder="pathaan.jpg"  ref={inputImg} defaultValue="pathaan.jpg" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date :</Form.Label>
        <Form.Control type="text"  placeholder="November 2020" defaultValue="November 2020" ref={inputDate} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate :</Form.Label>
        <Form.Control type="number"   max="5" min="1" defaultValue="1"  ref={inputRate} />
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
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}

export default AddMovies