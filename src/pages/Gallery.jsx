import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getVisibleComponents, getCategories } from '../data/components'
import ComponentRenderer from '../components/ComponentRenderer'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', ...getCategories()]

  const allComponents = getVisibleComponents()
  const filteredComponents = selectedCategory === 'All' 
    ? allComponents 
    : allComponents.filter(component => component.category === selectedCategory)

  return (
    <div className="container" style={{ padding: '20px' }}>
      {/* Đơn giản hóa header */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Component Gallery</h2>
      </div>
      
      {/* Category Filter */}
      <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{ 
              padding: '5px 10px', 
              background: selectedCategory === category ? '#333' : '#eee',
              color: selectedCategory === category ? '#fff' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Đơn giản hóa danh sách components */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {filteredComponents.map(component => (
          <div key={component.id} style={{ 
            border: '1px solid #eee', 
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            {/* Component name */}
            <div style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
              <h3 style={{ margin: 0, fontSize: '16px' }}>{component.name}</h3>
            </div>
            
            {/* Component Preview */}
            <Link to={`/component/${component.id}`} style={{ 
              display: 'block',
              padding: '20px',
              background: '#fafafa',
              textAlign: 'center',
              textDecoration: 'none'
            }}>
              <ComponentRenderer 
                componentName={component.component}
                props={component.props}
              />
            </Link>
          </div>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>No components found in this category.</p>
        </div>
      )}
    </div>
  )
}

export default Gallery
