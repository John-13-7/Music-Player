//song name artist and picture
import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //curly braces means extracting something specific from a file
import {
    faPlay, 
    faBookReader, 
    faAngleLeft, 
    faAngleRight,
    faPause
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";

const Player = ({
        currentSong, 
        isPlaying, 
        setIsPlaying, 
        audioRef,
        songInfo, 
        setSongInfo,
        songs,
        setCurrentSong,
        setSongs,
    }) =>{
    //useEffect
    useEffect(() => {
        const newSongs = songs.map((song) => {
            if(song.id === currentSong.id){ //if the state and id match
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
    }, [currentSong]);
    //event handler
    const playSongHandler = () =>{ //using reference
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying); //whatever its set as reverse them
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const getTime = (time) =>{
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) //formats it nicely
        );
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    const skipTrackHandler = (direction) => { //find the current index
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "skip-forward"){
            setCurrentSong(songs[(currentIndex + 1) % songs.length]); //resets back to the beginning
        }
        if(direction === "skip-back"){
            if((currentIndex - 1) % songs.length === -1){
                setCurrentSong(songs[songs.length - 1]);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]); //resets back to the beginning
        }
        playAudio(isPlaying, audioRef);
    };


    return( 
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration || 0} 
                    value={songInfo.currentTime} 
                    onChange={dragHandler}
                    type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon 
                    onClick={() => skipTrackHandler("skip-back")}
                    className="skip-back" 
                    size="2x" 
                    icon={faAngleLeft} />
                <FontAwesomeIcon 
                    className="play" 
                    onClick={playSongHandler} 
                    playsize="2x" 
                    icon={isPlaying ? faPause : faPlay} /> 
                <FontAwesomeIcon 
                    onClick={() => skipTrackHandler("skip-forward")}
                    className="skip-forward" 
                    size="2x" 
                    icon={faAngleRight} />
            </div>
        </div>
        );
};

export default Player;