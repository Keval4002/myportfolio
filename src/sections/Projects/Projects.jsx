import styles from './ProjectsStyles.module.css';
import PortfolioProject from '../../assets/PortfolioProject.png';
import ProjectCard from '../../common/ProjectCard';
import AwZentry from '../../assets/AwZentryProject.png';


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={PortfolioProject} href="https://kambaniportfolio.netlify.app/" projectName="#1st Project" projectDetails="Built using React"/>
            <ProjectCard src={AwZentry} href="https://awzentry.netlify.app/" projectName="#2nd Project" projectDetails="Built using React and Gsap"/>
        </div>
    </section>
  )
}

export default Projects
