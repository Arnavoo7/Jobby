import React, { useRef } from 'react'
import kuttiStory from "../audio/kuttiStory.mp3"
import Music from "../images/musical.png"
import { useState } from 'react';

const Media = () => {

  const audioRef = useRef(null);
  const[target, setTarget] = useState(false);
  
  
  const handleClick = () => {
    if(audioRef.current)
        audioRef.current.volume = 0.4;

    if(target === false){
      audioRef.current.play()    
      setTarget(!target)
    }
    else{
      audioRef.current.pause()
      setTarget(!target)
    }
  };

  return (
    <>
    <img onClick={handleClick} src={Music} alt="music-logo" className='w-10 ml-16 hover: cursor-pointer' title='Play some music'/>
    <audio ref={audioRef} controls style={{display: 'none'}}>
        <source src={kuttiStory} type='audio/mp3'/>
    </audio>
    </>
  )
}

export default Media