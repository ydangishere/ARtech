import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { components, getCategories } from '../data/components'
import ComponentRenderer from '../components/ComponentRenderer'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', ...getCategories()]

  const filteredComponents = selectedCategory === 'All' 
    ? components 
    : components.filter(component => component.category === selectedCategory)

  return (
    <div className="container">
      <div className="text-center mb-40">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          Component Gallery
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
          Browse and preview all available components
        </p>
        
        {/* Category Filter */}
        <div style={{ marginBottom: '2rem' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-secondary'}`}
              style={{ margin: '0 5px' }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid grid-3">
        {filteredComponents.map(component => (
          <div key={component.id} className="card">
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>
                {component.name}
              </h3>
              <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                {component.description}
              </p>
              <span style={{
                background: '#e9ecef',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '0.8rem',
                color: '#495057'
              }}>
                {component.category}
              </span>
            </div>
            
            {/* Component Preview */}
            <div style={{
              border: '1px solid #e9ecef',
              borderRadius: '6px',
              padding: '1rem',
              marginBottom: '1rem',
              background: '#f8f9fa',
              minHeight: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ComponentRenderer 
                componentName={component.component}
                props={component.props}
              />
            </div>
            
            {/* Actions */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link 
                to={`/component/${component.id}`}
                className="btn btn-primary"
                style={{ flex: 1, textAlign: 'center' }}
              >
                View Details
              </Link>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  const url = `${window.location.origin}${window.location.pathname}#/component/${component.id}`
                  navigator.clipboard.writeText(url)
                  alert('Link copied to clipboard!')
                }}
              >
                Copy Link
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center" style={{ padding: '2rem' }}>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            No components found in this category.
          </p>
        </div>
      )}
    </div>
  )
}

export default Gallery
