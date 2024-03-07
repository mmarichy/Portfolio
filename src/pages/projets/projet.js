import { Navigate, useParams } from 'react-router-dom'
import data from '../../data/projets.json'

function Projet() {
  const { id } = useParams()
  const idPro = data.find((obj) => obj.title === id)
  if (idPro) {
    return (
      <>
        <div>
          <h2>Projet</h2>
        </div>
      </>
    )
  } else {
    return <Navigate to="/404" />
  }
}

export default Projet
