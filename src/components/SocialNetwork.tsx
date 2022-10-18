import React from 'react'

import './SocialNetwork.css'

import {
    FaLinkedin,
    FaGithub
} from 'react-icons/all'


const SocialNetworl = () => {
  return (
    <section id="social-networks">
      <ul className='links-sobre'>
        <li>
          <a href={`https://www.linkedin.com/in/miguel-antonio-624ba1234/`}>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={`https://github.com/MiguelASFerreira`}>
            <FaGithub />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default SocialNetworl