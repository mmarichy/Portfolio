import './error.scss'
import Dog from '../../assets/Error/404Dog.png'

function Error() {
  return (
    <div className="error">
      <img src={Dog} alt="https://http.dog/" className="dog404" />

      <a href="/" className="homeLink404">
        Retourner à la page d'acceuil
      </a>
    </div>
  )
}

export default Error
