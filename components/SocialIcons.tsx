import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdNorthEast } from 'react-icons/md'
import styles from '../styles/mainheader.module.scss'

export function SocialIcons({ scrollFunction }: any) {
  return (
    <>
      <div className={styles.socialIconsContainer}>
        <div className={styles.header__socialIcons}>
          <div>
            <FaGithub />
            <a target="_blank" href="https://github.com/krishnagottipalli" rel="noopener noreferrer" className={styles.iconNames}>
              Github
            </a>
            <MdNorthEast />
          </div>
          <div>
            <FaLinkedin />
            <a target="_blank" href="https://www.linkedin.com/in/gottipalli/" rel="noopener noreferrer" className={styles.iconNames}>
              LinkedIn
            </a>
            <MdNorthEast />
          </div>
        </div>
      </div>
      <div className={styles.divSayHi}>
        <a onClick={() => scrollFunction()} className={styles.sayHi}>
          Say Hi 👋
        </a>
      </div>
    </>
  )
}
