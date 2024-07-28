import styles from './SkillsStyle.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Habilidades Técnicas</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"HTML"} />
        <SkillList src={checkMarkIcon} skill={"CSS"} />
        <SkillList src={checkMarkIcon} skill={"JavaScript"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"Vue-3"} />
        <SkillList src={checkMarkIcon} skill={"ReactJs"} />
        <SkillList src={checkMarkIcon} skill={"Bootstrap"} />
        <SkillList src={checkMarkIcon} skill={"Figma"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"Python"} />
        <SkillList src={checkMarkIcon} skill={"PHP"} />
        <SkillList src={checkMarkIcon} skill={"MySql"} />
        <SkillList src={checkMarkIcon} skill={"Git"} />
      </div>
    </section>
  )
}

export default Skills;
