import './presentation.scss'
import GitHub from '../../assets/github-mark-white.webp'
import LinkedIn from '../../assets/Linkedin.webp'
import PresPicture from '../../assets/presentation-picture.webp'

export default function Presentation() {
  return (
    <section className="intro">
      <div className="intro_picture">
        <img src={PresPicture} alt="Présentation" />
      </div>
      <div className="cadre">
        <div className="intro_pres">
          <p>
            Embalé par l'informatique depuis le lycée, j'ai obtenu un bac STI2D
            option Système d'Information et Numérique en 2020. Malheureusement
            sans poursuite d'étude post-covid, j'ai laissé de côté cette passion
            pour me concentrer sur la vie professionnelle.
          </p>
          <p>
            C'est en 2022 que j'ai eu une opportunité de reprendre mes études de
            développeur suite à un changement de vie.
            <br />
            Après 8 longs mois d'attente, soutenue par France Travail, j'ai
            intégré la formation certifiante développeur intégrateur web niveau
            bac +2 d'OpenClassroom. Durant l'laquelle j'ai solidifié mes
            compétences en HTML/CSS et obtenue de nouvelles connaissances en
            JavaScript/React.
          </p>
          <p>
            En fin de formation, je suis fier de ce que j'ai accompli et prêt à
            découvrir de nouvelle opportunité et solidifier davantage mes
            connaissances dans le web.
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
  )
}
