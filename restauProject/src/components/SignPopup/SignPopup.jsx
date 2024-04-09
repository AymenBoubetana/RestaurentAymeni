import { useState } from 'react'
import './SignPopup.css'
import { assets } from '../../assets/assets'

// eslint-disable-next-line react/prop-types
const SignPopup = ({setShowSign}) => {
  const [sign,setSign] = useState("sign up")
  return (
    <div className='SignPopup'>
      <form action="" className="form-sign">
        <div className="title">
        <h2>{sign==="sign up"?"sign up":"sign in"}  
        </h2>
        <img onClick={()=>setShowSign(false)} src={assets.cross_icon} alt="" />
        </div>
      {
        sign==="sign up"? 
        <div className="sign-up">
           <div className="inputs">
            <input type="text" placeholder='Your name' required/>
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required/>
            <button type="button">Create account</button>
           </div>
           <div className="policy">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms 
              of use & privacy policy
            </p>
           </div>
           <div className="log">
            <p>Already have an account ? <span onClick={()=>setSign("sign-in")}>click here</span></p>
           </div>
        </div>
        : 
        <div className="sign-in">
           <div className="inputs">
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required/>
            <button type="button">Create account</button>
           </div>
           <div className="policy">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms 
              of use & privacy policy
            </p>
           </div>
           <div className="log">
            <p>Create a new account ? <span onClick={()=>setSign("sign up")}>click here</span></p>
           </div>

        </div>
      }  
      
      </form>
    </div>
  )
}

export default SignPopup