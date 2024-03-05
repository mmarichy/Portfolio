import './navbar.scss'

function NavBar() {
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
}

export default NavBar
