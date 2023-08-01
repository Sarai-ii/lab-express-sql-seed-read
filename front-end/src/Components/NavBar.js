import { Link } from "react-router-dom";
// import { useState } from "react";

export default function NavBar() {

  // const [mouseOverText, setMouseOverText] = useState(false)
  // const handleMouseEnter = e => {
  //   setMouseOverText(true)
  // }
  // const handleMouseLeave = e => {
  //   setMouseOverText(false)
  // }
  return (
    <nav className="app-nav">
      <Link to="/" 
      // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="black" className="bi bi-house-door-fill" viewBox="13 2 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
        </svg>
      </Link>
      {/* {mouseOverText && <p className="message">Home</p>} */}
      <h1 >
        <Link className="nav-header" to="/songs" >Tuner App</Link>
      </h1>
      <button className="btn btn-default ">
        <Link className="new-song" to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
