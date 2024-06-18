import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta3.css'

const CTA3 = (props) => {
  return (
    <div
      className={`cta3-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="cta3-max-width thq-section-max-width">
        <div className="cta3-container1 thq-flex-row">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="cta3-placeholder-image thq-img-ratio-16-9"
          />
          <div className="cta3-column">
            <span className="cta3-text thq-heading-2">{props.content1}</span>
            <span className="cta3-text1 thq-heading-2">{props.content2}</span>
            <p className="cta3-text2 thq-body-small">{props.content3}</p>
            <div className="cta3-actions">
              <Link to="/about-me" className="cta3-navlink thq-button-filled">
                {props.action1}
              </Link>
              <Link to="/beats" className="cta3-navlink1 thq-button-outline">
                {props.action2}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA3.defaultProps = {
  action1: 'About Me',
  action2: 'Beats',
  content3: 'Musician / Music Producer',
  content1: 'MOCH DIMAS ALMAHTAR',
  content2: 'ARTCHIVE DMZ / BEAT',
  image1Src: '/a1b96502582d235762cc4ccc258296b2-1400w.jpg',
  image1Alt: 'Image1Alt',
  rootClassName: '',
}

CTA3.propTypes = {
  action1: PropTypes.string,
  action2: PropTypes.string,
  content3: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CTA3
