import React from 'react'

import Containerkiri from './containerkiri'
import Containerkanan from './containerkanan'
import './link.css'

const Link = (props) => {
  return (
    <div className="link-link">
      <Containerkiri></Containerkiri>
      <Containerkanan></Containerkanan>
    </div>
  )
}

export default Link
