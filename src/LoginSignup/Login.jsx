import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleInput = (event)=>{
    const value = event.target.value;
    const name = event.target.name;

    if("email" == name){
      setEmail(value)
    }
    if("password" == name){
      setPassword(value)
    }
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    if(email == "" || password == ""){
      alert("please enter all detail")
    }else{
      const getDetails = JSON.parse(localStorage.getItem("user"));
      console.log(getDetails);
  
      getDetails.map((curValue)=>{
        console.log(curValue);
        console.log(curValue.email);
        console.log(curValue.password);
  
        let storeEmail = curValue.email;
        let storePassword = curValue.password;
  
        if(storeEmail == email && storePassword == password){
          alert("Login successfully");
          navigate("/home");
        }else{
           return setMsg("Invalid Email or password");
        }
      })

    }
   
  }
  return (
    <div>
    <Navbar/>
      <div >
      <p className='errMsg'>{msg}</p>
      <form className='login-form' onSubmit={handleSubmit}>
            <div className='heading'>
                <p>Login</p>
            </div>
            <div className='account'>
          

              <input type="text" name="email" placeholder='Enter your Email' onChange={handleInput} />


              <input type="password" name="password" placeholder='Enter your Password' onChange={handleInput} />
               

               <p>New Account Create <a href="/">Sign Up</a></p>

            </div>
            <button>Login</button>
        </form>


      </div>
    </div>
  )
}

export default Login
