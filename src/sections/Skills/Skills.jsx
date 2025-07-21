import React from 'react';
import styles from './SkillsStyles.module.css';
import ReactLogo from '../../assets/react.svg';
import NodeLogo from '../../assets/nodejs.svg';
import JSLogo from '../../assets/javascript.svg';
import HTMLLogo from '../../assets/html5.svg';
import CSSLogo from '../../assets/css3.svg';
import MongoLogo from '../../assets/mongodb.svg';
import PostgresLogo from '../../assets/postgres.svg';
import NextLogo from '../../assets/nextjs.svg';
import ExpressLogo from '../../assets/express.svg';
import GsapLogo from '../../assets/gsap.svg';
import OpenAILogo from '../../assets/openai.svg';
import LangchainLogo from '../../assets/langchain.svg';
import PineconeLogo from '../../assets/pinecone.svg';

const skills = [
  { name: 'REACT', icon: ReactLogo },
  { name: 'NODE', icon: NodeLogo },
  { name: 'JAVASCRIPT', icon: JSLogo },
  { name: 'NEXTJS', icon: NextLogo },
  { name: 'MONGODB', icon: MongoLogo },
  { name: 'POSTGRES', icon: PostgresLogo },
  { name: 'EXPRESS', icon: ExpressLogo },
  { name: 'HTML', icon: HTMLLogo },
  { name: 'CSS', icon: CSSLogo },
  { name: 'GSAP', icon: GsapLogo },
  { name: 'OPENAI', icon: OpenAILogo },
  { name: 'LANGCHAIN', icon: LangchainLogo },
];

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillsGrid}>
        {skills.map(skill => (
          <div className={styles.skillCard} key={skill.name}>
            <div className={styles.skillIcon}>
              <img src={skill.icon} alt={skill.name + ' logo'} style={{ width: '60%', height: '60%' }} />
            </div>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills
