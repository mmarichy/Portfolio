import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Header from './container/Header/header'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
