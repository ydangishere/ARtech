import React, { useRef, useState, useEffect } from 'react'

// A lightweight resizable sandbox to test horizontal responsiveness.
// - Drag the right edge or use the slider to change width.
// - Shows current width in pixels.
const ResponsiveSandbox = ({ initialWidth = 600, minWidth = 240, maxWidth = 1200, children }) => {
  const [width, setWidth] = useState(initialWidth)
  const trackRef = useRef(null)
  const isDraggingRef = useRef(false)

  useEffect(() => {
    const onMove = (e) => {
      if (!isDraggingRef.current || !trackRef.current) return
      const rect = trackRef.current.getBoundingClientRect()
      const newWidth = Math.min(maxWidth, Math.max(minWidth, e.clientX - rect.left))
      setWidth(newWidth)
    }
    const onUp = () => { isDraggingRef.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [minWidth, maxWidth])

  return (
    <div>
      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <label style={{ color: '#333', fontWeight: 500 }}>Width:</label>
        <input
          type="range"
          min={minWidth}
          max={maxWidth}
          value={Math.round(width)}
          onChange={(e) => setWidth(Number(e.target.value))}
          style={{ flex: 1 }}
        />
        <div style={{ width: 90, textAlign: 'right', color: '#555' }}>{Math.round(width)} px</div>
      </div>

      {/* Track + Resizable preview */}
      <div ref={trackRef} style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            width,
            maxWidth: '100%',
            background: '#fff',
            border: '1px solid #e9ecef',
            borderRadius: 6,
            overflow: 'hidden',
            margin: '0 auto'
          }}
        >
          {children}
        </div>

        {/* Drag handle */}
        <div
          onMouseDown={() => { isDraggingRef.current = true }}
          title="Drag to resize"
          style={{
            position: 'absolute',
            left: `calc(50% + ${width / 2}px)`,
            transform: 'translateX(-8px)',
            top: 0,
            bottom: 0,
            width: 16,
            cursor: 'ew-resize',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: 4,
            height: 28,
            borderRadius: 2,
            background: '#cbd3da',
            boxShadow: 'inset 0 0 0 1px #b5bec6'
          }} />
        </div>
      </div>
    </div>
  )
}

export default ResponsiveSandbox


