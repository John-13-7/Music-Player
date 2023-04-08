import React, { useState, useRef} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import "./styles/app.scss";
import music from "./data"; //"music" can be anything

//npm install node-sass
//https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
//npm install uuid
function App() {
  //ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(music());
  const [currentSong, setCurrentSong] = useState(songs[0]); //grabs the first song
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false); //closed by default
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration});
  };


  return (
    <div className="App">
      <Nav 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        />
      <Song currentSong={currentSong}/>
      <Player 
        audioRef={audioRef}
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library 
        audioRef={audioRef} 
        songs={songs} 
        isPlaying={isPlaying}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        libraryStatus={libraryStatus}
        />
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}
      ></audio>

    </div>
  );
};

export default App;
