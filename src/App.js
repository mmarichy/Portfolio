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
          <Route exact path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/Projets/:id" element={<Projet />} />
          <Route path="*" element={<Navigate to="/Portfolio/Error" />} />
          <Route path="/Portfolio/Error" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
