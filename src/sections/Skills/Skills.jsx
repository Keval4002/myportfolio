import React from 'react';
import styles from './SkillsStyles.module.css';
import checkLight from '../../assets/checkmark-light.svg';
import checkDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import {useTheme} from '../../common/ThemeContext';

function Skills() {

    const {theme, toggleTheme} = useTheme();
    const checkMarkIcon = theme === 'light' ? checkLight : checkDark;

  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.SkillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JAVASCRIPT" />
            <SkillList src={checkMarkIcon} skill="NODE" />
            <SkillList src={checkMarkIcon} skill="REACT" />
            <SkillList src={checkMarkIcon} skill="POSTGRES" />
            <SkillList src={checkMarkIcon} skill="REST API" />
            <SkillList src={checkMarkIcon} skill="AUTHENTICATION" />
            <SkillList src={checkMarkIcon} skill="EXPRESS" />
            <SkillList src={checkMarkIcon} skill="GSAP" />
            <SkillList src={checkMarkIcon} skill="MONGODB" />
            <SkillList src={checkMarkIcon} skill="NEXTJS" />
        </div>
    </section>
  )
}

export default Skills
