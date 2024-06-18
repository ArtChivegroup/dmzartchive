import React from 'react'

import PropTypes from 'prop-types'

import './yt.css'

const Yt = (props) => {
  return (
    <a href={props.linkYt} target="_blank" rel="noreferrer noopener">
      <div className="yt-yt">
        <img alt={props.imageAlt1} src={props.imageSrc1} className="yt-image" />
        <h1 className="yt-text">{props.heading}</h1>
        <span className="yt-link1">{props.link}</span>
      </div>
    </a>
  )
}

Yt.defaultProps = {
  imageAlt1: 'image',
  link: 'Link',
  imageSrc1: '/youtube_png102347-200h.png',
  linkYt: 'https://www.youtube.com/@artchiveip',
  heading: 'ARTCHIVE IP YOUTUBE',
}

Yt.propTypes = {
  imageAlt1: PropTypes.string,
  link: PropTypes.string,
  imageSrc1: PropTypes.string,
  linkYt: PropTypes.string,
  heading: PropTypes.string,
}

export default Yt
