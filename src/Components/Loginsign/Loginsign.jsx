import React, { useState } from 'react'
import './Loginsign.css'
const Loginsign = () => {

  const [action,setAction] = useState('Login')

  return (
    <div className='container'>
    <h1>{action}</h1>
    <div className="underline"></div>
    <div className="inputs">
      <div className="input">
        {action==="Login"?<div></div>: <input type="text" placeholder='Name' />}
        
      </div>
      <div className="input">
        <input type="email" placeholder='Email' />
      </div>
      <div className="input">
        <input type="password" placeholder='password' />
      </div>
      {action==="Sign up"?<div></div>:  <div className="lostpass">
        Lost password <span>Click Here!</span>
      </div>}
     
      <div className="bottom">
        <div className="submit" onClick={()=>{setAction('Sign up')}}>Sign up</div>
        <div className="submit" onClick={()=>{setAction('Login')}}>Login</div>
      </div>
    </div>
    </div>
  )
}

export default Loginsign