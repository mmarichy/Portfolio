import './footer.scss'
import Logo from '../logo/logo'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <Logo />
        <ul className="footer-link">
          <li>
            <a href="#header">Acceuil</a>
          </li>
          <li>
            <a href="mailto:marichy.pro@gmail.com">Contactez-moi !</a>
          </li>
        </ul>
      </div>{' '}
      <h5 className="copyright">© 2024 Mathis Marichy</h5>
    </footer>
  )
}

export default Footer
