// REACT DEPENDENCIES
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

//IMAGES
import newSong from "../Photos/phone-back-img.png"

// STYLING
import '../Css/PhoneOverlay.css';
 
const PhoneOverlay = () => {
    const [showPlaylist, setShowPlaylist] = useState(true)
    const [showTime, setShowTime] = useState(new Date())
    const togglePlaylists = () => {
        // event.preventDefault()
        setShowPlaylist((ListOfPlaylists) => !ListOfPlaylists)
        //this checks if the variable for showPlaylist exists 
        // and runs opposite of false (default useState) if it's true
    };

    useEffect(() => {
        const handleTimeInterval = setInterval(() => {
            setShowTime(new Date())
        }, 1000)
        return () => clearInterval(handleTimeInterval)
    }, []);
    const formattedTime = showTime.toLocaleTimeString();


    return (
        <div className=" container phone-overlay">
            <div className="status-bar" /> 
            <div className="screen">
                <div className='screen-heading row'>
                    <ul className='col screen-heading'>
                        <br />
                        <li className='heading-text'>{formattedTime}</li>
                        <li>
                            <svg xmlns="" width="16" height="16" fill="white" 
                                className="heading-text bi bi-wifi" 
                                viewBox="2 0 16 12">
                                    <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                                    <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                            </svg>
                        </li>
                        <li className='' >
                            <svg xmlns="" width="16" height="16" fill="currentColor" className="heading-text bi bi-battery-half" viewBox="0 0 16 16">
                                <path d="M2 6h5v4H2V6z"/>
                                <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
                            </svg>
                        </li>
                        <li className='' >
                            <svg xmlns="" width="16" height="16" fill="currentColor" className="heading-text bi bi-bar-chart-fill" viewBox="0 0 16 16">
                                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
                            </svg>
                        </li>
                    </ul>
                </div>
                <span>
                    <h3 className='screen-main'>Good Morning,</h3>
                {/* </span> */}
                <button className='screen-btn btn'> <Link className='btn-text' to="/songs"> Songs </Link></button> 
                <p className="screen-btn-text">(click for redirection to songs page)</p>
                <button className='screen-btn btn' onClick={togglePlaylists}>Playlists </button> 
                <p className="screen-btn-text" >(click to toggle)</p>
                {showPlaylist && 
                    <div className='playlists'>
                        <p className="pool"> <span className='playlists-icon'>👙🏖️</span> POOL PARTY PLAYLIST</p>
                        <p className="workout"> <span className='playlists-icon'>🏋🏽‍♀️💪</span> WORKOUT JAMS</p>
                        <p className="romantic"> <span className='playlists-icon'>💙🎵</span> ROMANTIC RAP</p>
                    </div>
                }
                    <img className="img" src={newSong} alt="new single release from Flo Milli" />
                </span>
            </div>
            <div className="home-indicator" />
        </div>
    );
};

export default PhoneOverlay;
