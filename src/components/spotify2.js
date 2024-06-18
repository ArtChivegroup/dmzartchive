import React from 'react'

import PropTypes from 'prop-types'

import './spotify2.css'

const Spotify2 = (props) => {
  return (
    <a href={props.linkSpotify1} target="_blank" rel="noreferrer noopener">
      <div id="dh" className="spotify2-spotify">
        <img
          alt={props.imageAlt3}
          src={props.imageSrc3}
          className="spotify2-image"
        />
        <h1 className="spotify2-text">
          <span>DIMAS HOP</span>
          <br></br>
        </h1>
        <span className="spotify2-link1">{props.link2}</span>
      </div>
    </a>
  )
}

Spotify2.defaultProps = {
  link2: 'Link',
  linkSpotify1:
    'https://open.spotify.com/artist/01NnYSItQa1qBHV7tyrv0s?si=xCYWvCa9Rpa0z3elsnuw1g',
  imageSrc3: '/r-200h.png',
  imageAlt3: 'image',
}

Spotify2.propTypes = {
  link2: PropTypes.string,
  linkSpotify1: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
}

export default Spotify2
