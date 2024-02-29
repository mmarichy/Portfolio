import Languages from '../data/language.json'
import Projets from '../data/projets.json'

export default function test() {
  return (
    <>
      <div>
        {Languages &&
          Languages.map((language) => (
            <div key={language.id} id={language.id}>
              <img src={language.cover} alt={language.alt} />
              <p>{language.title}</p>
            </div>
          ))}
      </div>
      <div>
        {Projets &&
          Projets.map((projet) => (
            <div key={projet.id} id={projet.id}>
              <img src={projet.cover} alt={projet.alt} />
            </div>
          ))}
      </div>
    </>
  )
}
