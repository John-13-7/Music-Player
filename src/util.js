export const playAudio = (isPlaying, audioRef) => {
    if(isPlaying){
        const playPromise = audioRef.current.play();
        if(playPromise !== undefined){ //hasn't loaded up
            playPromise.then((audio) => {
                audioRef.current.play();
            });
        }
    }
};
