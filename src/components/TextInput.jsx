import React, { useState } from 'react'

const TextInput = ({ 
  label = 'Your Name',
  placeholder = 'Enter your name',
  value = '',
  required = false,
  onChange
}) => {
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <div style={{ width: '100%', maxWidth: '300px' }}>
      <label style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: '500',
        color: '#333'
      }}>
        {label}
        {required && <span style={{ color: '#dc3545' }}> *</span>}
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          padding: '10px 12px',
          border: '1px solid #ddd',
          borderRadius: '6px',
          fontSize: '0.9rem',
          transition: 'border-color 0.2s ease',
          outline: 'none'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#007bff'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#ddd'
        }}
      />
    </div>
  )
}

export default TextInput
