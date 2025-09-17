import React from 'react'

const SimpleCard = ({ 
  title = 'Card Title', 
  content = 'This is a simple card component with some content.',
  image = 'https://via.placeholder.com/300x200'
}) => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      maxWidth: '300px',
      width: '100%'
    }}>
      {image && (
        <img 
          src={image} 
          alt={title}
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover'
          }}
        />
      )}
      <div style={{ padding: '1rem' }}>
        <h3 style={{ 
          margin: '0 0 0.5rem 0', 
          color: '#333',
          fontSize: '1.1rem'
        }}>
          {title}
        </h3>
        <p style={{ 
          margin: 0, 
          color: '#666',
          fontSize: '0.9rem',
          lineHeight: '1.4'
        }}>
          {content}
        </p>
      </div>
    </div>
  )
}

export default SimpleCard
