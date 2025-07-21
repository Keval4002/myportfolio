import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/Keval.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/Resume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    
    const {theme, toggleTheme} = useTheme(); 

    const themeIcon = theme === 'light'? sun : moon ;
    const githubIcon = theme === 'light'? githubLight : githubDark ;
    const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark ;


  return (
    <><section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img className={styles.hero} src={heroImg} alt="Profile picture of Keval" />
          <img className={styles.colorMode} src={themeIcon} onClick={toggleTheme} alt="Color Mode Icon" />
        </div>

        <div className={styles.info}>
            <h1>Keval<br/>Ambani</h1>
            <h2>Full Stack Developer</h2>
            <span><a href="https://github.com/Keval4002" target='_blank'><img src={githubIcon} alt="github icon" /></a><a href="https://www.linkedin.com/in/keval-ambani-9ba99532a" target='_blank'><img src={linkedinIcon} alt="linkedin icon" /></a></span>
            <p className={styles.description}>Hey, I’m Keval Ambani – a Computer Engineering student who codes, breaks things, and fixes them (usually). I’m on a mission to make tech less terrible, one full-stack project at a time.</p>
            <a href={CV}  download>
                <button className="hover" >Resume</button>
            </a>
        </div>    
        
    </section></>
  )
}

export default Hero