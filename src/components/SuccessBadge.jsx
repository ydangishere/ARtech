import React from 'react'

const SuccessBadge = ({ 
  text = 'Success',
  size = 'medium'
}) => {
  const sizeStyles = {
    small: { 
      padding: '2px 8px', 
      fontSize: '0.7rem',
      borderRadius: '10px'
    },
    medium: { 
      padding: '4px 12px', 
      fontSize: '0.8rem',
      borderRadius: '12px'
    },
    large: { 
      padding: '6px 16px', 
      fontSize: '0.9rem',
      borderRadius: '14px'
    }
  }

  return (
    <span style={{
      background: '#d4edda',
      color: '#155724',
      border: '1px solid #c3e6cb',
      fontWeight: '500',
      display: 'inline-block',
      ...sizeStyles[size]
    }}>
      {text}
    </span>
  )
}

export default SuccessBadge
