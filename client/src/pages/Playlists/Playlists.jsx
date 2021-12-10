import React, { useEffect, useState } from "react";
import "./Playlists.scss";
import "./data";
import Playlist from "../../components/Playlist/Playlist";
import { PlaylistData } from "./data";
import api from "../../services/api";

const Playlists = () => {
  const [playlists,setPlaylists] = useState([]);
  useEffect(()=> {
    api.get("/api/playlist").then(({data}) => {
      setPlaylists(data)
    })
  }, [])
  return (
    <div className="playlists">
      <div className="title">
        <h1>Grandes playlists pra melhorar seu dia!</h1>
      </div>
      <div className="content">
        {PlaylistData.map((playlist, index) => {
          return (
            <Playlist
              id={playlist.id}
              cover={playlist.cover}
              key={index}
              alt={playlist.title}
            ></Playlist>
          );
        })}
      </div>
    </div>
  );
};

export default Playlists;
