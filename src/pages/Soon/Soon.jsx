import girl from '../../assets/image/black-girl.png'
import logo from '../../assets/image/Branding.png'
import React, { useState, useEffect } from 'react';
import './Soon.css'

const Soon = () => {
    const [countdown, setCountdown] = useState({
        days: 5,
        hours: 11,
        minutes: 23,
        seconds: 2
    });

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => {
                const newCountdown = { ...prevCountdown };

                if (newCountdown.seconds > 0) {
                    newCountdown.seconds -= 1;
                } else {
                    if (newCountdown.minutes > 0) {
                        newCountdown.minutes -= 1;
                        newCountdown.seconds = 59;
                    } else {
                        if (newCountdown.hours > 0) {
                            newCountdown.hours -= 1;
                            newCountdown.minutes = 59;
                            newCountdown.seconds = 59;
                        } else {
                            if (newCountdown.days > 0) {
                                newCountdown.days -= 1;
                                newCountdown.hours = 23;
                                newCountdown.minutes = 59;
                                newCountdown.seconds = 59;
                            } else {
                                clearInterval(countdownInterval);
                            }
                        }
                    }
                }
                return newCountdown;
            });
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    return (
        <div>
            <div>
                <div className='soon'>
                    <div className="soon-container">
                        <div className="img-side-girl"><img className='img-own-girl' src={girl} alt="girl" /></div>

                        <div className="soon-side">
                            <div className="logos"><img src={logo} alt="" /></div>
                            <div className="launch">Launching in</div>
                            <div className="numbers">
                                <div className="time-square">
                                    <div className="number">{countdown.days}</div>
                                    <div className="time margin">Days</div>
                                </div>
                                <div className="time-square margin">
                                    <div className="number">{countdown.hours}</div>
                                    <div className="time margin">Hours</div>
                                </div>
                                <div className="time-square margin">
                                    <div className="number">{countdown.minutes}</div>
                                    <div className="time margin">Minutes</div>
                                </div>
                                <div className="time-square margin">
                                    <div className="number">{countdown.seconds}</div>
                                    <div className="time margin">Seconds</div>
                                </div>
                            </div>
                            <div className="get">Get notified when we go live.</div>
                            <input className='soon-inp' type="text" c placeholder='Your username or email' />
                            <div className="soon-button">Get Notified</div>
                        </div>

                    </div>
                </div>
            </div></div>
    )
}
export default Soon