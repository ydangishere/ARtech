import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header style={{
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem 0',
      marginBottom: '2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{
            textDecoration: 'none',
            color: '#333',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            🎨 Component Gallery
          </Link>
          <nav>
            <Link to="/" className="btn btn-secondary">
              All Components
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
