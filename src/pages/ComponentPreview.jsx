import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getComponentById } from '../data/components'
import ComponentRenderer from '../components/ComponentRenderer'

const ComponentPreview = () => {
  const { id } = useParams()
  const component = getComponentById(id)

  if (!component) {
    return (
      <div className="container">
        <div className="text-center">
          <p>Component Not Found</p>
          <Link to="/">Back to Gallery</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container" style={{ padding: '20px' }}>
      {/* Chỉ hiển thị nút Back và component */}
      <div style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
          ← Back to Gallery
        </Link>
      </div>
      
      {/* Chỉ hiển thị component */}
      <div style={{ 
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ComponentRenderer 
          componentName={component.component}
          props={component.props}
        />
      </div>
    </div>
  )
}

export default ComponentPreview
