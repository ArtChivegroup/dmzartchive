import React from 'react'

import PropTypes from 'prop-types'

import './spotify1.css'

const Spotify1 = (props) => {
  return (
    <a href={props.linkSpotify} target="_blank" rel="noreferrer noopener">
      <div id="almac1" className="spotify1-spotify">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="spotify1-image"
        />
        <h1 className="spotify1-text">
          <span>ALMACTAR BEAT</span>
          <br></br>
        </h1>
        <span className="spotify1-link1">{props.link}</span>
      </div>
    </a>
  )
}

Spotify1.defaultProps = {
  imageAlt1: 'image',
  linkSpotify:
    'https://open.spotify.com/artist/7CAQSb6iQvxEraK0ofmGvI?si=mqmcH0fxQ_es2t9Cq40_dw',
  link: 'Link',
  imageSrc1: '/r-200h.png',
}

Spotify1.propTypes = {
  imageAlt1: PropTypes.string,
  linkSpotify: PropTypes.string,
  link: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default Spotify1
