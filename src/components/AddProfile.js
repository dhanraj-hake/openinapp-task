"use client"
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserCard from './UserCard';

const AddProfile = () => {
  const [show, setShow] = useState(false);
  const [isBasic, setIsBasic] = useState(true);
  const [userData, setUserData] = useState(false);
  

  const [name, setName ]= useState("");
  const [email, setEmail ]= useState("");
  const [phone, setPhone ]= useState("");
  const [insta, setInsta ]= useState("");
  const [youtube, setYoutube ]= useState("");

  const handleSave = () =>{
    setShow(false);
    setUserData(true);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='add-profile-card'>
      {!userData ? <>
      <img src="add-user.svg" alt="" onClick={handleShow} />
      <p className='add-profile-text'>Add Profile</p>
      </> : <UserCard name={name} email={email} phone={phone} youtube={youtube} insta={insta}/>}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="row ">
            <div className="col text-center">
              <p className={`modal-nav-link ${isBasic ? 'active' : ''}` } onClick={()=>setIsBasic(true)}>Basic</p>
            </div>
            <div className="col text-center">
              <p className={`modal-nav-link ${!isBasic ? 'active' : ''}`} onClick={()=>setIsBasic(false)}>Social</p>
            </div>
          </div>
          {isBasic ? <>
          <div class="mb-3">
          <label for="exampleInputEmail2" class="form-label">Enter  Name*</label>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Eg. John Doe'/>
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail2" class="form-label">Enter Email*</label>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder='Eg. John@xyz.com' />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Enter Phone*</label>
          <input onChange={(e)=>setPhone(e.target.value)} value={phone} type="number" class="form-control" id="exampleInputPassword1" placeholder='Eg.  9123456789'/>
        </div> </>: <>

        <div class="mb-3">
          <label for="exampleInputEmail8" class="form-label my-2">Instagram Link <p className='text-secondary d-inline'>(Optional) </p> </label>
          <input onChange={(e)=>setInsta(e.target.value)} value={insta} type="email" class="form-control my-2" id="exampleInputEmail8" aria-describedby="emailHelp" placeholder='Eg. ..instagram.com/username' />
        </div>

        <div class="mb-5">
          <label for="exampleInputPassword5" class="form-label my-2">Youtube Link <p className='text-secondary d-inline'>(Optional) </p> </label>
          <input  onChange={(e)=>setYoutube(e.target.value)} value={youtube} type="text" class="form-control my-3" id="exampleInputPassword5" placeholder='Eg. ..youtebe/username'/>
        </div> </>
          
        }
          

        </Modal.Body>
        <Modal.Footer>
          {isBasic ? <Button variant="primary" onClick={()=>setIsBasic(false)}>
            Next
          </Button> : 
          <>
            <button type="button" class="btn btn-outline-secondary" onClick={()=>setIsBasic(true)}>Back</button>

            <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          </>
          }
          
          
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default AddProfile
