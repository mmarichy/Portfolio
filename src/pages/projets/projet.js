import { Navigate, useParams } from 'react-router-dom'
import data from '../../data/projets.json'
import ProjectDesc from '../../components/projectDesc/projectDesc'
import Carrousel from '../../components/carrousel/carrousel'
import './projet.scss'

function Projet() {
  const { id } = useParams()
  const idPro = data.find((project) => project.title === id)
  if (idPro) {
    return (
      <div className="displayProject">
        <ProjectDesc
          Title={idPro.title}
          Description={idPro.description}
          Langage={idPro.langage}
          Alt={idPro.altlang}
          Site={idPro.site}
          GitHub={idPro.github}
        />
        <Carrousel Pictures={idPro.pictures} />
      </div>
    )
  } else {
    return <Navigate to="/404" />
  }
}

export default Projet
