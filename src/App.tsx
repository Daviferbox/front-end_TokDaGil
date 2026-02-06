import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'

function App() {


  return (
    <div id="app">
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </div>

  )
}

export default App
