import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menuicon from "../assets/ci_hamburger-lg.svg"

const OffCanvass = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div onClick={handleShow}>
        <img src={menuicon} alt="menu-icon" />
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='d-flex flex-column container mt-3 gap-3'>
        <Link to={"/auth/signin"}>
            {" "}
            <button className=" login-btn w-100 ">Log in</button>{" "}
          </Link>

          <Link to={"/auth/signup"}>
            {" "}
            <button className="sign-up-btn w-100">Sign up</button>
          </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvass;
