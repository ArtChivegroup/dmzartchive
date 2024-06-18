import React from 'react'

import PropTypes from 'prop-types'

import './yt1.css'

const Yt1 = (props) => {
  return (
    <a href={props.linkYt} target="_blank" rel="noreferrer noopener">
      <div id="almac2" className="yt1-yt">
        <img
          alt={props.imageAlt2}
          src={props.imageSrc2}
          className="yt1-image"
        />
        <h1 className="yt1-text">{props.heading}</h1>
        <span className="yt1-link1">{props.link1}</span>
      </div>
    </a>
  )
}

Yt1.defaultProps = {
  imageSrc2: '/youtube_png102347-200h.png',
  linkYt: 'https://www.youtube.com/@almactar_beat',
  imageAlt2: 'image',
  heading: 'ALMACTAR BEAT',
  link1: 'Link',
}

Yt1.propTypes = {
  imageSrc2: PropTypes.string,
  linkYt: PropTypes.string,
  imageAlt2: PropTypes.string,
  heading: PropTypes.string,
  link1: PropTypes.string,
}

export default Yt1
