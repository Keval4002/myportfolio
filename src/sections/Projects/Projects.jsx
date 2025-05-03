import styles from './ProjectsStyles.module.css';
import PortfolioProject from '../../assets/PortfolioProject.png';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={PortfolioProject} href="https://github.com/Keval4002" projectName="#1st Project" projectDetails="Built using React"/>
        </div>
    </section>
  )
}

export default Projects