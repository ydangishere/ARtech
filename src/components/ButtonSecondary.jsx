import React from 'react'

const ButtonSecondary = ({ 
  text = 'Cancel', 
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
        background: disabled ? '#6c757d' : '#6c757d',
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
          e.target.style.background = '#545b62'
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.target.style.background = '#6c757d'
        }
      }}
    >
      {text}
    </button>
  )
}

export default ButtonSecondary
