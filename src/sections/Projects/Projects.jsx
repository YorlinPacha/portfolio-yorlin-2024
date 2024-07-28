import React from "react";
import styles from "./ProjectsStyles.module.css";
import imgSpace from "../../assets/viberr.png";
import imgSestao from "../../assets/fresh-burger.png";
import imgMarimba from "../../assets/hipsster.png";
import imgKpi from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        {/* Agregamos el componente */}
        <ProjectCard
            src={imgKpi}
            link={"https://github.com/YorlinPacha/Restaurante-Marimba"}
            h3={"Indicadores Kpi"}
            p={"Modulo Empresarial"}/>
        <ProjectCard
            src={imgSpace}
            link={"https://github.com/YorlinPacha/Mi-Space-ToDo-List"}
            h3={"Space To Do"}
            p={"Lista de Tareas"}/>
        <ProjectCard
            src={imgSestao}
            link={"https://github.com/YorlinPacha/ProyectoFinal-SestaoNow"}
            h3={"Sesta Now"}
            p={"Portal de anuncios"}/>
        <ProjectCard
            src={imgMarimba}
            link={"https://github.com/YorlinPacha/Restaurante-Marimba"}
            h3={"Sistema Admin"}
            p={"Web Restaurante "}/>
      </div>
    </section>
  );
}

export default Projects;
