import React from "react";
import styles from "./ProjectsStyles.module.css";
import imgSpace from "../../assets/spaceToDo.png";
import imgSestao from "../../assets/sestaoNow.png";
import imgMarimba from "../../assets/marimbaLogo.png";
import imgKpi from "../../assets/datosKpis.png";
import ProjectCard from "../../common/ProjectCard";
import weatherImg from '../../assets/weatherF5.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        {/* Agregamos el componente */}
        <ProjectCard
            src={imgKpi}
            link={"https://github.com/YorlinPacha/modulo-kpi-unilever"}
            h3={"Indicadores Kpi"}
            p={"Modulo Empresarial"}
            tecnologias={"PHP - JavaScript - SQL - JQuery - Bootstrap"}/>
        <ProjectCard
            src={imgMarimba}
            link={"https://github.com/YorlinPacha/Restaurante-Marimba"}
            h3={"Sistema Admin"}
            p={"Web Restaurante "}
            tecnologias={"PHP - JavaScript - SQL - Bootstrap"}/>
        <ProjectCard
            src={imgSestao}
            link={"https://github.com/YorlinPacha/ProyectoFinal-SestaoNow"}
            h3={"Sestao Now"}
            p={"Portal de anuncios"}
            tecnologias={"Vue3 - JavaScript - SQL - Bootstrap - Python"}
            mostrarDemo={"true"}
            linkDemo={"https://www.youtube.com/watch?v=SdVYx2X-Ec4"}/>
        <ProjectCard
            src={imgSpace}
            link={"https://github.com/YorlinPacha/Mi-Space-ToDo-List"}
            h3={"Space To Do"}
            p={"Lista de Tareas"}
            tecnologias={"JavaScript - Vue3 - HTML - CSS3"}
            mostrarDemo={"true"}
            linkDemo={"https://space-todo.netlify.app/"}/>
        <ProjectCard
            src={weatherImg}
            link={"https://github.com/YorlinPacha/app_weather"}
            h3={"Weather F5"}
            p={"Aplicacion del clima"}
            tecnologias={"Html - CSS - Vue3 - JavaScript - Bootstrap"}
            mostrarDemo={"true"}
            linkDemo={"https://myweatherf5.netlify.app/"}/>
      </div>
    </section>
  );
}

export default Projects;
