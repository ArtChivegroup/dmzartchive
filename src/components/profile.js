import React from 'react'

import PropTypes from 'prop-types'

import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-profile">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="profile-image"
      />
      <h1 className="profile-text">
        <span>ARTCHIVE DMZ / BEAT (Brand New)</span>
        <br></br>
      </h1>
    </div>
  )
}

Profile.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/story-01-200h.png',
}

Profile.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Profile
