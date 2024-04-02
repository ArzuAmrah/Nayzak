import React from 'react'
import './Success.css'
import box from '../../assets/svg/box.svg'
const Success = () => {
    return (
        <div>
            <div className="thanks">
                <div className="thank-side">
                    <div className="icon-side">
                        <span className='circle'><img className='circle-main' src={box} alt="" /></span>
                        <span className="text-thank">Thank you!</span>
                        <div className="thank-review">Your review was successfully submitted.</div>
                        <div className="button-side">
                            <button>Close</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success