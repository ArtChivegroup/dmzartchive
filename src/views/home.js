import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import CTA3 from '../components/cta3'
import Vidnya from '../components/vidnya'
import Link from '../components/link'
import EmbedSpotify from '../components/embed-spotify'
import ContactForm2 from '../components/contact-form2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Moch Dimas Almahtar</title>
        <meta property="og:title" content="Moch Dimas Almahtar" />
      </Helmet>
      <Navbar2
        link1="Home"
        link2="About Me"
        link3="Beats"
        link4="Vsl"
        link5="Download"
      ></Navbar2>
      <CTA3 rootClassName="cta3-root-class-name"></CTA3>
      <Vidnya></Vidnya>
      <Link></Link>
      <EmbedSpotify></EmbedSpotify>
      <ContactForm2></ContactForm2>
    </div>
  )
}

export default Home
