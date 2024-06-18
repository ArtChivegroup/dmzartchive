import React from 'react'

import Kiri from './kiri'
import Kanan from './kanan'
import './vidnya.css'

const Vidnya = (props) => {
  return (
    <div className="vidnya-vidnya">
      <Kiri></Kiri>
      <Kanan></Kanan>
    </div>
  )
}

export default Vidnya
