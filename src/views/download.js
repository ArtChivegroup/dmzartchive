import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import DownloadContent from '../components/download-content'
import ContactForm2 from '../components/contact-form2'
import './download.css'

const Download = (props) => {
  return (
    <div className="download-container">
      <Helmet>
        <title>Download - Moch Dimas Almahtar</title>
        <meta property="og:title" content="Download - Moch Dimas Almahtar" />
      </Helmet>
      <Navbar2
        link1="Home"
        link2="About Me"
        link3="Beats"
        link4="Vsl"
        link5="Download"
      ></Navbar2>
      <DownloadContent></DownloadContent>
      <ContactForm2 rootClassName="contact-form2-root-class-name1"></ContactForm2>
    </div>
  )
}

export default Download
