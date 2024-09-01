import  "./Header.css";
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";

import { toast } from "react-toastify";
function Header(){
  const userName=JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();

  const onLogout=()=>{
    localStorage.removeItem('loggedin')
    toast.success('logout Successfully')
     navigate('/')
  }
  return(
    <>
    <header>
    <div className='Header-container'>
    <h1 className='todoHeading'>Hey,Lots of work to do?  </h1>
    <p className='paraheading'>Let's make to-do List</p>
    
    <>
          <p className="welcome-msg"> <Typewriter
                options={{
                  strings:['Welcome in best To-do Application,'],
                  autoStart: true,
                  loop: true,
                }}
              /> <span>{userName.name}!</span></p>
          <button onClick={onLogout} className="btn btn-danger logout-btn">Logout</button>
          </>
      
    </div>
  </header>
    
    </> 
  )
}
export default Header;