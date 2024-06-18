import React from 'react'

import PropTypes from 'prop-types'

import './images.css'

const Images = (props) => {
  return (
    <div className="images-container">
      <img alt={props.imageAlt} src={props.imageSrc} className="images-image" />
    </div>
  )
}

Images.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/drake%20vocal%20preset-400w.jpg',
}

Images.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Images
