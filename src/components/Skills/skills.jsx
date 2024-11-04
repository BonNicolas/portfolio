import Softwares from "../Softwares/softwares";
import SkillsData from '../../data/skills.json';

const SkillsContent = [
  { 
    id: "1",
    title: "Infographie",
    category: "infographie"
  },
  {
    id: "2",
    title: "Frontend",
    category: "frontend"
  }
];

function Skills() {

  return (
    <section id="competences" className="skills">
      <h2>Compétences</h2>
      <div className="skills__cards">
        {SkillsContent.map((data, index) => {
          const skills = SkillsData.skills[data.category];
          return (
            <Softwares key={data.id} 
            title={data.title} s
            kills={skills} 
            />
          )
        })}
      </div>
    </section>
  );
}

export default Skills;
