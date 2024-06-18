import React from 'react'

import PropTypes from 'prop-types'

import './isi.css'

const Isi = (props) => {
  return (
    <div className="isi-isi">
      <h1 className="isi-text">
        <span>About Moch Dimas Almahtar</span>
        <br></br>
      </h1>
      <h1 id="1" className="isi-text03">
        <span>Musical Career Journey</span>
        <br></br>
      </h1>
      <span id="1.2" className="isi-text06">
        <span>
          I am Moch Dimas Almahtar, born on January 16, 2000, in Bogor and
          raised in Sukabumi. My musical journey began in 2014 as a rapper,
          learning to write lyrics with the group Threelogy Hip-Hop in Depok.
        </span>
        <br></br>
      </span>
      <h1 id="2" className="isi-text09">
        <span>Exploration as Dimas Hop</span>
        <br></br>
      </h1>
      <span id="2.2" className="isi-text12">
        {props.text}
      </span>
      <h1 id="3" className="isi-text13">
        <span>Founding MFS and Hip-Hop Community</span>
        <br></br>
      </h1>
      <span id="3.2" className="isi-text16">
        {props.text1}
      </span>
      <h1 id="4" className="isi-text17">
        <span>Mini-album &quot;Semester Satu&quot;</span>
        <br></br>
      </h1>
      <span id="4.2" className="isi-text20">
        {props.text2}
      </span>
      <h1 id="5" className="isi-text21">
        <span>Role in ARTCHIVE</span>
        <br></br>
      </h1>
      <span id="5.2" className="isi-text24">
        {props.text3}
      </span>
      <h1 id="6" className="isi-text25">
        <span>Music Production as ARTCHIVE Beat</span>
        <br></br>
      </h1>
      <span id="6.2" className="isi-text28">
        {props.text4}
      </span>
      <h1 id="6" className="isi-text29">
        <span>Vision and Mission with ARTCHIVE</span>
        <br></br>
      </h1>
      <span id="6.2" className="isi-text32">
        {props.text5}
      </span>
    </div>
  )
}

Isi.defaultProps = {
  text: 'In 2015, I started releasing singles on online music platforms like Reverbnation after moving to Sukabumi.',
  text2:
    'In 2017, I released the mini-album "Semester Satu," consisting of six songs, which garnered attention from local media and hip-hop enthusiasts.',
  text1:
    'In 2016, along with DYVV and WibuSex, we founded MFS (Moher**ker Squad), an active hip-hop community in the local music scene.',
  text4:
    "Initially known as Almactar Beat, I later developed my producer persona into ARTCHIVE Beat, creating music that reflects our collective's collaborative and innovative vision.",
  text5:
    'At ARTCHIVE, we believe in bridging diverse perspectives and fostering a culture of innovation and harmony through art. Each member—musicians, illustrators, graphic designers, and music producers—brings unique expertise to create a dynamic and collaborative creative environment.',
  text3:
    'Building on this, I co-founded ARTCHIVE the same year with ARTCHIVE DMZ, ARTCHIVE SXX, and ARTCHIVE VSL, a collective focused on music, visual art, design, and conceptual innovation.',
}

Isi.propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
}

export default Isi
