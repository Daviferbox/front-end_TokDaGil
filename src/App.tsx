import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Empresa from './pages/empresa'


function App() {


  return (
    <div id="app">
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
        </Routes>
      </div>

    </div>

  )
}

export default App
