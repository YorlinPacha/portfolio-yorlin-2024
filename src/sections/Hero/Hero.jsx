import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubrDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubrDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Foto perfil Yorlin Pachajoa" />
        <img className={styles.colorMode} src={themeIcon} alt="icono cambiar modo" onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>Yorlin <br/> Pachajoa</h1>
        <h2>Desarrollador Web</h2>
        <span>
            <a href="https://twitter.com/" target="_blank">
                <img src={twitterIcon} alt="Icono Twitter" />
            </a>
            <a href="https://github.com/" target="_blank">
                <img src={githubIcon} alt="Icono github" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
                <img src={linkedinIcon} alt="Icono linkedin" />
            </a>
        </span>
        <p>Apasionado por la programación, con un enfoque en la creatividad y la colaboración. Mi objetivo es crear soluciones innovadoras que no solo funcionan, sino que también inspiran. ¡Vamos a construir algo increíble juntos! </p>
        <a href={CV} download>
            <button className='hover'>
                Curriculum
            </button>
        </a>
      </div>
    </section>
  )
}

export default Hero
