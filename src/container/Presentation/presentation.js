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
              Emballé par l'informatique depuis le lycée, j'ai obtenu un bac
              STI2D option Système d'Information et Numérique en 2020.
            </p>
            <p>
              C'est en 2022 que j'ai eu une opportunité de reprendre mes études
              de développeur suite à un changement de vie.
            </p>
            <p>
              J'ai intégré la formation certifiante développeur intégrateur web
              niveau bac +2 d'OpenClassroom. Durant laquelle j'ai solidifié mes
              compétences en HTML/CSS et obtenu de nouvelles connaissances en
              JavaScript/React.
            </p>
            <p>
              En fin de formation, je suis fier de ce que j'ai accompli et prêt
              à découvrir de nouvelle opportunité et solidifier davantage mes
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
    </>
  )
}
