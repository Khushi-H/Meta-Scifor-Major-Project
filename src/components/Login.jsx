import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';
function Login() {
  const[input,setInput] = useState({
    email:'',
    password:''
  })
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password===loggeduser.password){
      localStorage.setItem('loggedin',true)
      toast.success('Login Successfully')
      navigate('/home');
    }
    else if(input.email === '' || input.password === ''){
      toast.error("please add all fields")
      }else{
        toast.error("something wrong")
      }
    
  };

  return (
    <>
    <div className="login">
      <div>
    <div className="auth-container">
        <center><h2>Login</h2></center>
      
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={input.email} name='email' onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} required placeholder='Enter Your Email' />
        </label>
        <label>
          Password:
          <input type="password" value={input.password} name='password' onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} required placeholder='Enter Your Password'/>
        </label>
        <button type="submit">Login</button>
        <div className="form2">Don't have an account?
           <Link to="/signup" >
               <span style={{color:"blue",cursor:"pointer",fontSize:"16px"}}> Sign Up </span> 
            </Link>

        </div>
      </form>
    </div>
    </div>
    </div>
    </>
  );
}

export default Login;
