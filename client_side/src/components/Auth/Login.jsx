import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addUser } from './../../redux/action';
function Login() {
    const dispatch = useDispatch()
    const [show,setShow] = useState(false);
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(addUser({firstname,lastname,email,password}))
    }
  return (
    <div>
      <div className={show ? "container right-panel-active" : "container"} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)}  />
            <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}  />
            <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}  />
            <button onClick={(e)=>submitHandler(e)}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn"  onClick={()=>setShow(!show)}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={()=>setShow(!show)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>
          Created with <i className="fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">
            Florin Pop
          </a>
          - Read how I created this and how you can join the challenge
          <a
            target="_blank"
            href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
          >
            here
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default Login;
