import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getComponentById } from '../data/components'
import ComponentRenderer from '../components/ComponentRenderer'
import ResponsiveSandbox from '../components/ResponsiveSandbox'

const ComponentPreview = () => {
  const { id } = useParams()
  const component = getComponentById(id)
  const [props, setProps] = useState(component?.props || {})

  if (!component) {
    return (
      <div className="container">
        <div className="text-center" style={{ padding: '4rem 0' }}>
          <h1 style={{ color: '#dc3545', marginBottom: '1rem' }}>
            Component Not Found
          </h1>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            The component you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Gallery
          </Link>
        </div>
      </div>
    )
  }

  const handlePropChange = (propName, value) => {
    setProps(prev => ({
      ...prev,
      [propName]: value
    }))
  }

  const copyShareLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#/component/${id}`
    navigator.clipboard.writeText(url)
    alert('Share link copied to clipboard!')
  }

  return (
    <div className="container">
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" className="btn btn-secondary" style={{ marginBottom: '1rem' }}>
          ← Back to Gallery
        </Link>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#333' }}>
          {component.name}
        </h1>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          {component.description}
        </p>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{
            background: '#e9ecef',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '0.9rem',
            color: '#495057'
          }}>
            {component.category}
          </span>
          <button onClick={copyShareLink} className="btn btn-primary">
            📋 Copy Share Link
          </button>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Component Preview */}
        <div className="card">
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>Preview (Resizable)</h3>
          <ResponsiveSandbox initialWidth={700} minWidth={260} maxWidth={1200}>
            <div style={{
              padding: '1.5rem',
              background: '#f8f9fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 180
            }}>
              <ComponentRenderer 
                componentName={component.component}
                props={props}
              />
            </div>
          </ResponsiveSandbox>
        </div>

        {/* Props Editor */}
        <div className="card">
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>Props Editor</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Object.entries(component.props).map(([key, value]) => (
              <div key={key}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#333'
                }}>
                  {key}:
                </label>
                {typeof value === 'boolean' ? (
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="checkbox"
                      checked={props[key] || false}
                      onChange={(e) => handlePropChange(key, e.target.checked)}
                    />
                    {key}
                  </label>
                ) : typeof value === 'number' ? (
                  <input
                    type="number"
                    value={props[key] || ''}
                    onChange={(e) => handlePropChange(key, Number(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '8px',
                      border: '1px solid #ddd',
                      borderRadius: '4px'
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    value={props[key] || ''}
                    onChange={(e) => handlePropChange(key, e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px',
                      border: '1px solid #ddd',
                      borderRadius: '4px'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#333' }}>Usage Example</h3>
        <pre style={{
          background: '#f8f9fa',
          padding: '1rem',
          borderRadius: '6px',
          border: '1px solid #e9ecef',
          overflow: 'auto',
          fontSize: '0.9rem'
        }}>
{`import { ${component.component} } from './components'

<${component.component}
${Object.entries(props).map(([key, value]) => 
  `  ${key}="${typeof value === 'string' ? value : value}"`
).join('\n')}
/>`}
        </pre>
      </div>
    </div>
  )
}

export default ComponentPreview
