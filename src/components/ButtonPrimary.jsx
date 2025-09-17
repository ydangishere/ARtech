import React from 'react'

const ButtonPrimary = ({ 
  text = 'Click Me', 
  size = 'medium', 
  disabled = false,
  onClick 
}) => {
  const sizeStyles = {
    small: { padding: '6px 12px', fontSize: '0.8rem' },
    medium: { padding: '10px 20px', fontSize: '0.9rem' },
    large: { padding: '12px 24px', fontSize: '1rem' }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: disabled ? '#6c757d' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        ...sizeStyles[size]
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.target.style.background = '#0056b3'
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.target.style.background = '#007bff'
        }
      }}
    >
      {text}
    </button>
  )
}

export default ButtonPrimary
