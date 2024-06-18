import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './beatsembed.css'

const Beatsembed = (props) => {
  return (
    <div className={`beatsembed-container ${props.rootClassName} `}>
      <div className="beatsembed-container1">
        <div className="beatsembed-container2">
          <Script
            html={`<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-74d251bb-c44e-412b-89d3-71a77ab16241" data-elfsight-app-lazy></div>`}
            className=""
          ></Script>
        </div>
      </div>
    </div>
  )
}

Beatsembed.defaultProps = {
  rootClassName: '',
}

Beatsembed.propTypes = {
  rootClassName: PropTypes.string,
}

export default Beatsembed
