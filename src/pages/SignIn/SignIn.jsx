import React from 'react'
import './SignIn.css'
import overlay from '../../assets/image/overlay.png'
import { NavLink } from 'react-router-dom'


const SignIn = () => {
    return (
        <div>  <div className='login'>
            <div className="login-container">
                <div className="img-side"><img className='img-own' src={overlay} alt="girl" /></div>
                <div className="sign-up">

                    <div className="sign">Sign in</div>
                    <div className="sign-text"><span className="text">Don’t have an accout yet? <NavLink to='/SignUp'><span className='sign-in-span'>Sign up</span></NavLink></span></div>
                    <input type="text" placeholder='Your username or email' />
                    <input type="password" placeholder='Password' />
                    <div className="check-side"><div className="checked"> <input className='check' type="checkbox"/><span className='remember'>Remember me</span> <div className="forgot">Forgot password?</div></div></div>
                    

                    <div className="sign-button"><NavLink to='/'>Sign in</NavLink></div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default SignIn