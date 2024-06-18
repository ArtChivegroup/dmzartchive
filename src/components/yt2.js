import React from 'react'

import PropTypes from 'prop-types'

import './yt2.css'

const Yt2 = (props) => {
  return (
    <a href={props.linkYt1} target="_blank" rel="noreferrer noopener">
      <div id="dh2" className="yt2-yt">
        <img
          alt={props.imageAlt4}
          src={props.imageSrc4}
          className="yt2-image"
        />
        <h1 className="yt2-text">
          <span>DIMAS HOP</span>
          <br></br>
        </h1>
        <span className="yt2-link1">{props.link3}</span>
      </div>
    </a>
  )
}

Yt2.defaultProps = {
  imageSrc4: '/youtube_png102347-200h.png',
  imageAlt4: 'image',
  link3: 'Link',
  linkYt1:
    'https://www.youtube.com/watch?v=n1GQCClJVfU&list=PLQ73awBd9rICvuehB4d83X1m2rNP6Cp2y',
}

Yt2.propTypes = {
  imageSrc4: PropTypes.string,
  imageAlt4: PropTypes.string,
  link3: PropTypes.string,
  linkYt1: PropTypes.string,
}

export default Yt2
