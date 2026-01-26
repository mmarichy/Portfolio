import './presentation.scss'
import GitHub from '../../assets/github-mark-white.webp'
import LinkedIn from '../../assets/Linkedin.webp'
import PresPicture from '../../assets/presentation-picture.webp'
import myCV from '../../assets/Mathis_Marichy.pdf'

export default function Presentation() {
  return (
    <>
      <a href={myCV} target="blank" className="myName">
        Marichy Mathis
      </a>
      <section className="intro">
        <div className="intro_picture">
          <img src={PresPicture} alt="Présentation" />
        </div>
        <div className="cadre">
          <div className="intro_pres">
            <p>
              Passionné par l'informatique depuis le lycée, j'ai obtenu un bac
              STI2D option Système d'Information et Numérique en 2020.
            </p>
            <p>
              En 2022, j'ai saisi l'opportunité de
              reprendre mes études dans le développement web. J'ai intégré la
              formation certifiante Développeur Intégrateur Web (niveau bac +2)
              d'OpenClassrooms, au cours de laquelle j'ai consolidé mes
              compétences en HTML/CSS et développé une expertise en JavaScript et
              React.
            </p>
            <p>
              Actuellement en alternance en tant que Lead Developer chez
              Fluidexpert, je poursuis un Bachelor Concepteur Développeur
              d'Applications à CESI Dijon. Je me spécialise dans le développement
              d'applications web modernes.
            </p>
            <p>
              Fier du chemin parcouru, je continue d'approfondir mes connaissances
              et suis motivé à relever de nouveaux défis techniques dans le
              développement web.
            </p>
          </div>
          <div className="intro_pres-links">
            <button className="button">
              <a
                href="https://github.com/mmarichy"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GitHub} alt="Lien vers mon profil GitHub" />
              </a>
            </button>
            <button className="button">
              <a
                href="https://www.linkedin.com/in/mathis-marichy/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedIn} alt="Lien vers mon profil LinkedIn" />
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
