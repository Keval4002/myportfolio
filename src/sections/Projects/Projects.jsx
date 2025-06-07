import styles from './ProjectsStyles.module.css';
import PortfolioProject from '../../assets/PortfolioProject.png';
import ProjectCard from '../../common/ProjectCard';
import AwZentryProject from '../../assets/AwZentryProject';


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={PortfolioProject} href="https://kambaniportfolio.netlify.app/" projectName="#1st Project" projectDetails="Built using React"/>
            <ProjectCard src={AwZentryProject} href="https://awzentry.netlify.app/" projectName="#2nd Project" projectDetails="Built using React and Gsap"/>
        </div>
    </section>
  )
}

export default Projects
