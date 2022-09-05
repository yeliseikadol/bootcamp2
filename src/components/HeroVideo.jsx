import React from 'react'
import Player from 'react-background-video-player'

export default function HeroVideo() {
      return (
        <div className='player-wrapper'>
          <Player>
            <source src="../assets/video/1066780867-hd.mp4"/>
            </Player>
        </div>
      )
    }