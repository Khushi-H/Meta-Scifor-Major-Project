import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './Login.css'
import { toast } from 'react-toastify';
function Signup() {
  const[input,setInput] = useState({
    
    email:'',
    name:'',
    password:''
  })
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Dummy signup logic
   
    localStorage.setItem("user",JSON.stringify(input))
   
      toast.success('SignUp Successfully')
      navigate('/');
     
    
  };

  return (
    <>
    <div className="login">
      <div>
    <div className="auth-container">
        <center><h2>Signup</h2></center>
      
      <form onSubmit={handleSignup}>
      <label>
          Email:
          <input type="email" value={input.email} name='email' onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} required placeholder='Enter Your Email' />
        </label>
        <label>
          Username:
          <input type="text" value={input.name} name='name' onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} required placeholder='Enter Your Name' minLength={3} />
        </label>
        <label>
          Password:
          <input type="password" value={input.password} name='password' onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} required placeholder='Enter Your Password' minLength={5} />
        </label>
        <button type="submit">Signup</button>
        <div className="form2">Already have an account?
           <Link to="/" >
               <span style={{color:"blue",cursor:"pointer",fontSize:"16px"}}> Login </span> 
            </Link>

        </div>
      </form>
    </div>
    </div>
    </div>
    </>
  );
}

export default Signup;
