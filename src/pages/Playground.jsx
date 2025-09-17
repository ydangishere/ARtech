import React, { useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { components } from '../data/components'
import ComponentRenderer from '../components/ComponentRenderer'

const useQuery = () => {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

const Playground = () => {
  const query = useQuery()
  const navigate = useNavigate()
  const selectedId = query.get('c') || components[0]?.id
  const selected = components.find(c => c.id === selectedId) || components[0]

  const selectComponent = (id) => {
    const params = new URLSearchParams(window.location.search)
    params.set('c', id)
    navigate({ search: params.toString() }, { replace: false })
  }

  return (
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '20px' }}>
        {/* Sidebar list */}
        <aside className="card" style={{ padding: 0 }}>
          <div style={{ padding: '12px 16px', borderBottom: '1px solid #eee', fontWeight: 600, color: '#333' }}>
            Components
          </div>
          <div>
            {components.map(c => (
              <button
                key={c.id}
                onClick={() => selectComponent(c.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 16px',
                  border: 'none',
                  background: c.id === selected.id ? '#eef6ff' : 'transparent',
                  cursor: 'pointer',
                  color: '#333',
                  borderLeft: c.id === selected.id ? '3px solid #007bff' : '3px solid transparent'
                }}
              >
                <div style={{ fontWeight: 600 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: '#777' }}>{c.category}</div>
              </button>
            ))}
          </div>
        </aside>

        {/* Preview area */}
        <section>
          <div className="card" style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 style={{ marginBottom: 4, color: '#333' }}>{selected.name}</h2>
                <div style={{ color: '#777' }}>{selected.description}</div>
              </div>
              <Link className="btn btn-secondary" to={`/component/${selected.id}`}>Open details</Link>
            </div>
          </div>
          <div className="card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 220,
            background: '#f8f9fa',
            border: '1px solid #e9ecef'
          }}>
            <ComponentRenderer componentName={selected.component} props={selected.props} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Playground


