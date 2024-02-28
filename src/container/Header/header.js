import Logo from '../../components/Logo/logo'
import NavBar from '../../components/NavBar/navbar'
import './header.scss'

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <NavBar />
    </header>
  )
}
