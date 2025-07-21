import styles from './ProjectsStyles.module.css';
import PortfolioProject from '../../assets/PortfolioProject.png';
import ProjectCard from '../../common/ProjectCard';
import AwZentry from '../../assets/AwZentryProject.png';
import ExpenseTracker from '../../assets/ExpenseTracker.png'
import RuppeeFlowLogo from '../../assets/ruppeeflow.svg';
import ZentryLogo from '../../assets/zentry.svg';
import PresGenLogo from '../../assets/presgen.svg';


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={PresGenLogo} href="https://presgen.netlify.app/" projectName="PresGen" projectDetails="PResentation Generator"/>
            <ProjectCard src={RuppeeFlowLogo} href="https://ruppeeflow-1.onrender.com" projectName="RuppeeFlow" projectDetails="MERN Project"/>
            <ProjectCard src={ZentryLogo} href="https://awzentry.netlify.app/" projectName="Zentry Website" projectDetails="React and Gsap"/>

        </div>
    </section>
  )
}

export default Projects
