import React from "react";
import { useState } from "react";
import SignUpService from "../../services/signUp.service";
import { AlteredTextField } from "./AlteredTextField/AlteredTextField";
import { formFields } from "./SignUpFormFields";

const SignUpPage = () =>{

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const {name, email, password, confirmPassword} = data

    if(password !== confirmPassword){
      // setErrors({...errors, ["confirmPassword"]:"passwords dont match"})
      setErrors({['confirmPassword']: 'passwords dont match'})
    }else{
      const response = await SignUpService.request(JSON.stringify({name, email, password}))
      if(response.error){
        setErrors({...response.body.details})
      }
    }
  }

  const handleChange = (e) =>{
    const {name, value} = e.target
    setData({...data, [name]:value})
  }

  const showPassword = () =>{
    document.getElementById('password').type = document.getElementById('password').type === 'text'?'password':'text'
    document.getElementById('ConfirmPassword').type = document.getElementById('confirmPassword').type === 'text'?'password':'text'
  }


  return(
    <React.Fragment>
      <form onSubmit={handleSubmit} className='form-container'>
        <h2>Sign Up</h2>
        <input 
        type="text" 
        name='name' 
        id='name' 
        value={data.name}
        placeholder="name"
        onChange={handleChange} 
      />
      <input 
        type="email" 
        name='email' 
        id='email'
        value={data.email}
        placeholder="email"
        onChange={handleChange} 
      />
      <input 
        type="password" 
        name='password'
        id='password'
        value={data.password}
        placeholder="password"
        onChange={handleChange} 
      />
      <input 
        type="password"
        name='confirmPassword'
        id='confirmPassword'
        value={data.confirmPassword}
        placeholder="Confirm Password"
        onChange={handleChange} 
      />
      </form>
      <div style={{ position: "relative", left: "29%", width: "100%" }}>
        <input type="checkbox" onClick={showPassword} style={{ width: "2%" }} />
        <span style={{ color: "white", fontSize: "0.8rem" }}>Show password</span>
      </div>
      <button style={{ position: "relative", left: "43%" }}>Register</button>
    </React.Fragment>
  )
}

export default SignUpPage