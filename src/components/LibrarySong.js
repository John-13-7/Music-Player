//song name artist and picture
import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
        song, 
        songs, 
        setCurrentSong, 
        id, 
        audioRef, 
        isPlaying,
        setSongs,
    }) => {
    const songSelectHandler = () => { //also this could have worked just by using
        //song.id
        //const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(song);
        audioRef.current.play();
        //active state
        const newSongs = songs.map((song) => {
            if(song.id === id){ //if the state and id match
                return{
                    ...song,
                    active: true,
                };
            }
            else{ //if they dont match
                return{
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
        playAudio(isPlaying, audioRef);
    };
    return(  
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
        );
};

export default LibrarySong;