import React from 'react'

import Script from 'dangerous-html/react'

import './embed-spotify.css'

const EmbedSpotify = (props) => {
  return (
    <div className="embed-spotify-container">
      <div className="embed-spotify-container1">
        <div className="embed-spotify-container2">
          <Script
            html={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5NCiVYExImqNbslBVrH6cF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default EmbedSpotify
