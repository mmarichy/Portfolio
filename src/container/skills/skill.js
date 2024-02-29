import LanguageGrid from '../../components/language/language'
import ToolsGrid from '../../components/tools/tools'
import './skills.scss'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills_title">Mes compétences</h2>
      <div className="skills_display">
        <div className="skills_tools skills_background">
          <h3 className="skills_tools-title">Logiciels</h3>
          <ToolsGrid />
        </div>
        <div className="skills_languages skills_background">
          <h3 className="skills_languages-title">Languages</h3>
          <LanguageGrid />
        </div>
      </div>
    </section>
  )
}
