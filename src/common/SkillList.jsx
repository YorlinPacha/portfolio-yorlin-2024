

function SkillList({src, skill}) {
  return (
    <span>
      <img src={src} alt="Icono CheckMark" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
