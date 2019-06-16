import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
class Video extends Component {
  render () {
    return (
    <div className="container">
        <ReactPlayer url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' 
            playing 
            loop={true} 
            volume={0}
            muted={true}
            width='100%'
            height='100%'  />
    </div>
    )
  }
}

export default Video;
