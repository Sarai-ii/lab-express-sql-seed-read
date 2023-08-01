// PACKAGES AND REACT DEPENDENCIES

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

//STYLING
import "../Css/Show.css"

const API = process.env.REACT_APP_API_URL;

function SongDetails() {

  const [song, setSong] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then((response) => {
      setSong(response.data);
    });
  }, [id, navigate]);

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteSong();
  };

  return (
    <div className="">
      <article className="card card-details text-center bg-dark grey ">
        <h3>
          {song.is_favorite ? <span>⭐️</span> : null} {song.name} by {song.artist}
        </h3>
        <h4>{song.album}</h4>
        <h6>Time: {song.time}</h6>
        <div className="showNavigation">
          <div className="">
            {" "}
            <Link to={`/songs`}>
              <button className="btn btn-outline-secondary button-details">Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/songs/${id}/edit`}>
              <button className="btn btn-outline-secondary button-details">Edit</button>
            </Link>
          </div>
          <div className="">
            <button
              className="btn btn-outline-secondary button-details "
              onClick={handleDelete}>Delete
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
export default SongDetails;