import './projectDesc.scss'

function ProjectDesc({ Title, Description, Langage, Alt, Site, GitHub }) {
  if (Site === null) {
    return (
      <div className="projets">
        <h1 className="projets_title">{Title}</h1>
        <div className="projets_info">
          <div className="projets_info_description">
            <p>{Description}</p>
          </div>
          <div className="projets_info_langage">
            <img src={Langage[0]} alt={Alt[0]} />
            <img src={Langage[1]} alt={Alt[1]} />
          </div>
        </div>
        <div className="projets_link">
          <a href={GitHub} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    )
  } else {
    return (
      <div className="projets">
        <h1 className="projets_title">{Title}</h1>
        <div className="projets_info">
          <div className="projets_info_description">
            <p>{Description}</p>
          </div>
          <div className="projets_info_langage">
            <img src={Langage[0]} alt={Alt[0]} />
            <img src={Langage[1]} alt={Alt[1]} />
          </div>
        </div>
        <div className="projets_link">
          <a href={Site} target="_blank" rel="noreferrer">
            Démo du site
          </a>
          <a href={GitHub} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    )
  }
}

export default ProjectDesc
