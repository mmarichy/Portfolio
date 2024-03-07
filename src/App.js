import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages'
import Header from './container/Header/header'
import Footer from './components/footer/footer'
import Error from './pages/Error/error'
import Projet from './pages/projets/projet'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projets/:id" element={<Projet />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
