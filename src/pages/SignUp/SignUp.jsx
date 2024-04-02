import React, { useState } from 'react';
import left from '../../assets/image/left.png';
import './SignUp.css';
import { NavLink } from 'react-router-dom';
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    confirm_password: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    axios.post("http://127.0.0.1:8000/accounts/register/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error('SignUp Error:', error);
      });
  };

  return (
    <div className='login'>
      <div className="login-container">
        <div className="img-side">
          <img className='img-own' src={left} alt="girl" />
        </div>
        <div className="sign-up">
          <div className="sign">Sign Up</div>
          <div className="sign-text">
            <span className="text">
              Already have an account? <NavLink to='/SignIn'><span className='sign-in-span'>Sign in</span></NavLink>
            </span>
          </div>
          <input type="text" placeholder='Your name' name="name" onChange={handleChange} />
          <input type="text" placeholder='Username' name="surname" onChange={handleChange} />
          <input type="email" placeholder='Email address' name="email" onChange={handleChange} />
          <input type="password" placeholder='Password' name="password" onChange={handleChange} />
          <div className="check-side">
            <div className="checked">
              <input className='check' type="checkbox" />
              <span>I agree with <span className="bold">Privacy Policy</span> and <span className="bold">Terms of Use</span></span>
            </div>
          </div>
          <div className="sign-button"><NavLink to='/'>Signup</NavLink></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
