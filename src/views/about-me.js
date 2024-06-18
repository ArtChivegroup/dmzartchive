import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Isi from '../components/isi'
import ContactForm2 from '../components/contact-form2'
import './about-me.css'

const AboutMe = (props) => {
  return (
    <div className="about-me-container">
      <Helmet>
        <title>About-Me - Moch Dimas Almahtar</title>
        <meta property="og:title" content="About-Me - Moch Dimas Almahtar" />
      </Helmet>
      <Navbar2
        link1="Home"
        link2="About Me"
        link3="Beats"
        link4="Vsl"
        link5="Download"
      ></Navbar2>
      <Isi></Isi>
      <ContactForm2 rootClassName="contact-form2-root-class-name"></ContactForm2>
    </div>
  )
}

export default AboutMe
