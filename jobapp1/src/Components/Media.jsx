import React, { useRef } from 'react'
import kuttiStory from "../audio/kuttiStory.mp3"
import Music from "../images/musical.png"

const Media = () => {

  const audioRef = useRef(null);
  
  const handleClick = () => {
    if(audioRef.current)
        audioRef.current.volume = 0.4;

    if(audioRef.current)
        audioRef.current.play()
    else
    audioRef.current.autoplay = true;

  };

  return (
    <>
    <img onClick={handleClick} src={Music} className='w-10 ml-16 hover: cursor-pointer' title='Play some music'/>
    <audio ref={audioRef} controls style={{display: 'none'}}>
        <source src={kuttiStory} type='audio/mp3'/>
    </audio>
    </>
  )
}

export default Media