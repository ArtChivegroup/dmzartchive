import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Beatsembed from '../components/beatsembed'
import ContactForm22 from '../components/contact-form22'
import './beats.css'

const Beats = (props) => {
  return (
    <div className="beats-container">
      <Helmet>
        <title>Beats - Moch Dimas Almahtar</title>
        <meta property="og:title" content="Beats - Moch Dimas Almahtar" />
      </Helmet>
      <Navbar2
        link1="Home"
        link2="About Me"
        link3="Beats"
        link4="Vsl"
        link5="Download"
      ></Navbar2>
      <Beatsembed rootClassName="beatsembed-root-class-name"></Beatsembed>
      <ContactForm22 rootClassName="contact-form22-root-class-name1"></ContactForm22>
    </div>
  )
}

export default Beats
