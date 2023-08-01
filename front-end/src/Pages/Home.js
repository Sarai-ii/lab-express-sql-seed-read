import tunerLogo from "../Photos/tuner-decal.png"
import "../Css/Home.css"
// import { Link } from "react-router-dom";

import PhoneOverlay from '../Components/PhoneOverlay';

function Home() {
  return (
    <div className='container'>
      {/* I want to split the background color within this second div */}
      <div className="row">
        <h3 className="col home-text ">Welcome to a new home for all your audio needs, Tuner App.
        <br/>
        <br/>
        All your <strong>favorite</strong> songs and podcasts found here. 
        </h3>
        <PhoneOverlay />
        {/* tried using another col to move the phone more towards the right when in mobile but it's pointlesss*/}
      </div>
      <div className="row">   
        <span className="col">
          <img className="tuner-logo" src={tunerLogo} alt="Tuner app clickable decal icon"/> 
          <h3 className="logoText">Tuner App</h3> 
        </span>
      </div>
    </div>
  );
}
export default Home;
  
  