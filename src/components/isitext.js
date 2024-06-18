import React from 'react'

import PropTypes from 'prop-types'

import './isitext.css'

const Isitext = (props) => {
  return (
    <div className="isitext-isitext">
      <h1 className="isitext-text">{props.heading}</h1>
      <span className="isitext-text1">
        <span>
          Check out the &apos;Free Drake Vocal Chain&apos; preset by ARTCHIVE
          Beat in FL Studio. It makes your vocal sound clearer and on point,
          perfect for making pro-level tracks!
        </span>
        <br></br>
        <br></br>
      </span>
      <a
        href={props.linkButton}
        target="_blank"
        rel="noreferrer noopener"
        className="isitext-link button"
      >
        <span>
          <span>Download</span>
          <br></br>
        </span>
      </a>
    </div>
  )
}

Isitext.defaultProps = {
  heading: 'Free Drake Vocal Chain - FL Studio Stock Plugin',
  linkButton:
    'https://raw.githubusercontent.com/ArtChivegroup/mediame/main/FREE%20DRAKE%20PRESET/FREE%20DRAKE%20PRESET.zip',
}

Isitext.propTypes = {
  heading: PropTypes.string,
  linkButton: PropTypes.string,
}

export default Isitext
