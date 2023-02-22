import React from 'react'
import s from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  
  faLinkedin,

  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <h2>Banu Seyhan</h2>
      <div className={s.container}>
        <div className={s.link}>
          <a target={'_blank'} href={'https://github.com/banuseyhan'} rel="noreferrer">
            <FontAwesomeIcon size={'3x'} icon={faGithub} color={'#416CA6'} />
          </a>
        </div>
        <div className={s.link}>
          <a target={'_blank'} href={'https://www.linkedin.com/in/banu-k%C3%BCbra-seyhan/'} rel="noreferrer">
            <FontAwesomeIcon size={'3x'} icon={faLinkedin} color={'#416CA6'} />
          </a>
        </div>
        
      </div>
      <p>© {new Date().getFullYear()} </p>
    </div>
  )
}