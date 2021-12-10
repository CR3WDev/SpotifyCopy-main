import React from "react";
import "./PlaylistMusics.scss";
import { PlaylistData } from "../Playlists/data";
import spotifyLogo from "../../images/logoBranca.png";
const PlaylistMusics = () => {
  var playlistInfo;
  function getDados() {
    var idPlaylist = parseInt(localStorage.getItem("idPlaylistSelected"));
    playlistInfo = PlaylistData.find((playlist) => playlist.id === idPlaylist);
  }

  return (
    <>
      {getDados()}
      <div className="playlistMusics">
        <div className="logo">
          <img src={spotifyLogo} alt="Logo spotify" />
        </div>
        <div className="content">
          <div className="playlistInfo">
            <div className="cover">
              <img src={playlistInfo.cover} alt={playlistInfo.title} />
            </div>
            <h1>{playlistInfo.title}</h1>
          </div>
          <div className="musics">
            {playlistInfo.musics.map((playlist, index) => {
              return (
                <div className="music" key={index}>
                  <h1>{playlist.title}</h1>
                  <audio
                    src={playlist.audio}
                    controls
                    preload="metadata"
                  ></audio>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistMusics;
