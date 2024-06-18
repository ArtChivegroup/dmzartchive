import React from 'react'

import PropTypes from 'prop-types'

import './profile1.css'

const Profile1 = (props) => {
  return (
    <div className="profile1-profile">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="profile1-image"
      />
      <h1 className="profile1-text">
        <span>DIMAS HOP / ALMACTAR BEAT (Old)</span>
        <br></br>
      </h1>
    </div>
  )
}

Profile1.defaultProps = {
  imageSrc: '/sunjkrfz_400x400-200h.jpg',
  imageAlt: 'image',
}

Profile1.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Profile1
