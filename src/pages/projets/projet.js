import { Navigate, useParams } from 'react-router-dom'
import data from '../../data/projets.json'
import ProjectDesc from '../../components/projectDesc/projectDesc'

function Projet() {
  const { id } = useParams()
  const idPro = data.find((project) => project.title === id)
  if (idPro) {
    return (
      <>
        <ProjectDesc
          Title={idPro.title}
          Description={idPro.description}
          Langage={idPro.langage}
          Alt={idPro.altlang}
          Site={idPro.site}
          GitHub={idPro.github}
        />
      </>
    )
  } else {
    return <Navigate to="/404" />
  }
}

export default Projet
