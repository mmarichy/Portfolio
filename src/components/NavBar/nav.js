import './navbar.scss'
import { useLocation } from 'react-router-dom'

function NavBar() {
  const currentLocation = useLocation()
  // console.log(currentLocation)
  if (currentLocation.pathname === '/') {
    return (
      <>
        <nav className="navBar">
          <ul>
            <li>
              <a href="#skills" className="nav-link">
                À propos
              </a>
            </li>
            <li>
              <a href="#projets" className="nav-link">
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  } else {
    return (
      <>
        <nav className="navBar">
          <ul>
            <li>
              <a href="/Portfolio" className="nav-link">
                Accueil
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

export default NavBar
