import LogoMM from '../../assets/Logo.png'
import './logo.scss'

function Logo() {
  return (
    <div className="logoNav">
      <a href="/Portfolio">
        <img src={LogoMM} alt="Logo"></img>
      </a>
    </div>
  )
}

export default Logo
