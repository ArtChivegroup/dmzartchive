import React from 'react'

import Yt from './yt'
import Spotify from './spotify'
import './linkstram.css'

const Linkstram = (props) => {
  return (
    <div className="linkstram-linkstram">
      <Yt></Yt>
      <Spotify></Spotify>
    </div>
  )
}

export default Linkstram
