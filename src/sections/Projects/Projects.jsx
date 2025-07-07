import styles from './ProjectsStyles.module.css';
import PortfolioProject from '../../assets/PortfolioProject.png';
import ProjectCard from '../../common/ProjectCard';
import AwZentry from '../../assets/AwZentryProject.png';
import ExpenseTracker from '../../assets/ExpenseTracker.png'


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={ExpenseTracker} href="https://ruppeeflow-1.onrender.com" projectName="RuppeeFlow" projectDetails="MERN Project"/>
            <ProjectCard src={AwZentry} href="https://awzentry.netlify.app/" projectName="Zentry Website" projectDetails="React and Gsap"/>

        </div>
    </section>
  )
}

export default Projects
