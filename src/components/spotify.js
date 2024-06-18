import React from 'react'

import PropTypes from 'prop-types'

import './spotify.css'

const Spotify = (props) => {
  return (
    <a href={props.linkSpotify} target="_blank" rel="noreferrer noopener">
      <div className="spotify-spotify">
        <img
          alt={props.imageAlt2}
          src={props.imageSrc2}
          className="spotify-image"
        />
        <h1 className="spotify-text">{props.heading1}</h1>
        <span className="spotify-link1">{props.link1}</span>
      </div>
    </a>
  )
}

Spotify.defaultProps = {
  imageSrc2: '/r-200h.png',
  heading1: 'ARTCHIVE BEAT SPOTIFY',
  link1: 'Link',
  imageAlt2: 'image',
  linkSpotify:
    'https://open.spotify.com/artist/0sLsPOnEoUv5UsmLGJpGwT?si=b6Rpvn5cQ-Kc9C-JCInGbQ',
}

Spotify.propTypes = {
  imageSrc2: PropTypes.string,
  heading1: PropTypes.string,
  link1: PropTypes.string,
  imageAlt2: PropTypes.string,
  linkSpotify: PropTypes.string,
}

export default Spotify
