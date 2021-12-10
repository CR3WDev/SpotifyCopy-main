import React from "react";
import "./Playlist.scss";
import { Link } from "react-router-dom";
const Playlist = (props) => {
  function hello() {
    localStorage.setItem("idPlaylistSelected", props.id);
  }
  return (
    <div className="playlist">
      <Link
        onClick={() => hello()}
        className="playlistClick"
        to={"Playlist/" + props.id}
      >
        <img src={props.cover} alt={props.alt} />
      </Link>
    </div>
  );
};

export default Playlist;
