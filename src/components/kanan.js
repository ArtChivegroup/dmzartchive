import React from 'react'

import Script from 'dangerous-html/react'

import './kanan.css'

const Kanan = (props) => {
  return (
    <div className="kanan-kanan">
      <div className="kanan-container">
        <div className="kanan-container1">
          <Script
            html={`<iframe width="551" height="337" src="https://www.youtube.com/embed/iOgxldM6xqE?si=BnVZj-EUBoJ1tKBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}
          ></Script>
        </div>
      </div>
      <h1 className="kanan-text">
        <span>ARTCHIVE DMZ - NO GANG</span>
        <br></br>
        <span>(FREESTYLE)</span>
      </h1>
    </div>
  )
}

export default Kanan
