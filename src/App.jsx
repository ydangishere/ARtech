import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Gallery from './pages/Gallery'
import ComponentPreview from './pages/ComponentPreview'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/component/:id" element={<ComponentPreview />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
