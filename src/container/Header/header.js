import Logo from '../../components/Logo/mylogo'
import NavBar from '../../components/NavBar/nav'
import './header.scss'

export default function Header() {
  return (
    <header className="header" id="header">
      <Logo />
      <NavBar />
    </header>
  )
}
