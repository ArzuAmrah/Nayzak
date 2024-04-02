import React from 'react'
import './Page404.css'
import { Link} from 'react-router-dom'
import error from '../../assets/svg/error.svg'
const Page404 = () => {
  return (
    <div>
        <div className="error">
            <div className="error-data">
                <div className="icon-error"><img src={error} alt="error" /></div>
                <div className="data">404 – Page not found</div>
                <div className="error-text">The page you're looking for isn't available.Try to search again or use the go back button below.</div>
                <button className='back'><Link to='/homePage'>Go back home</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Page404