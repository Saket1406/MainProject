import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { useNavigate } from "react-router-dom";

function Nav() {

    const [show,handleShow] = useState  (false);
    const navigate = useNavigate()
    const transitionNavbar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll" , transitionNavbar);
        return () => window.removeEventListener("scroll" , transitionNavbar);
    } , []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav-contents">
            <img className='nav_logo' 
            onClick={() => navigate("/")}
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
            <img className='nav_avatar'
            onClick={() => navigate("/profile")}
             src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar.png" />
        </div>
    </div>
    
  )
}

export default Nav