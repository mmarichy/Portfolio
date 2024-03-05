import Logo from '../../components/logo/logo'
import NavBar from '../../components/navbar/nav'
import './header.scss'

export default function Header() {
  return (
    <header className="header" id="header">
      <Logo />
      <NavBar />
    </header>
  )
}
