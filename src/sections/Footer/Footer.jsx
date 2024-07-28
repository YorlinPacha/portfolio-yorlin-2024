import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
      <p>&copy; 2024 Yorlin Fabian Pachajoa Rendon. <br/>
        Todos los derechos reservados.
      </p>
    </section>
  )
}

export default Footer
