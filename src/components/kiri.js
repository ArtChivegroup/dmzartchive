import React from 'react'

import Script from 'dangerous-html/react'

import './kiri.css'

const Kiri = (props) => {
  return (
    <div className="kiri-kiri">
      <div className="kiri-container">
        <div className="kiri-container1">
          <Script
            html={`<iframe width="551" height="337" src="https://www.youtube.com/embed/EUdELoQ-znE?si=ASJUuddUdDq_ApVh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}
          ></Script>
        </div>
      </div>
      <h1 className="kiri-text">
        <span>ARTCHIVE DMZ - BRING ME BACK</span>
        <br></br>
        <span>(FREESTYLE)</span>
      </h1>
    </div>
  )
}

export default Kiri
