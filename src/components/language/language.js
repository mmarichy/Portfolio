import Languages from '../../data/language.json'
import './language.scss'

export default function LanguageGrid() {
  return (
    <div className="languages_grid">
      {Languages &&
        Languages.map((language) => (
          <div key={language.id} className="languages_grid_display">
            <img src={language.image} alt={language.alt} />
            <p>{language.title}</p>
          </div>
        ))}
    </div>
  )
}
