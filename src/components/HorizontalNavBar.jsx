import React, { useState, useRef, useEffect } from 'react'
import styles from './HorizontalNavBar.module.css'

const HorizontalNavBar = ({ 
  buttons = [
    { id: 'special-store', textLines: ['Special', 'Store'] },
    { id: 'featured-offers', textLines: ['Featured', 'Offers'] },
    { id: 'dealers', textLines: ['Dealers'] },
    { id: 'chests', textLines: ['Chests'] },
    { id: 'gems', textLines: ['Gems'] }
  ],
  selectedButton = 'special-store',
  onButtonClick = () => {},
  basePath = '/ARtech/assets/nav-buttons'
}) => {
  // Get responsive button size based on available width (container - 24px padding)
  const getButtonSize = (containerWidth = 0) => {
    const availableWidth = containerWidth - 24 // 12px padding each side
    
    if (availableWidth >= 1440) return { width: 130, height: 48, fontSize: 14 }
    if (availableWidth >= 1024) return { width: 120, height: 48, fontSize: 13.5 }
    if (availableWidth >= 768) return { width: 115, height: 46, fontSize: 13 }
    if (availableWidth >= 600) return { width: 110, height: 44, fontSize: 12.5 }
    return { width: 105, height: 42, fontSize: 12 }
  }
  
  const [buttonSize, setButtonSize] = useState(getButtonSize())
  const [selected, setSelected] = useState(selectedButton)
  const [hoveredButton, setHoveredButton] = useState(null)
  const scrollContainerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleButtonClick = (buttonId) => {
    setSelected(buttonId)
    onButtonClick(buttonId)
  }

  const handleMouseEnter = (buttonId) => {
    if (!isDragging) {
      setHoveredButton(buttonId)
    }
  }

  const handleMouseLeave = () => {
    setHoveredButton(null)
  }

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseup', handleMouseUp)
      container.addEventListener('mouseleave', handleMouseUp)
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseup', handleMouseUp)
        container.removeEventListener('mouseleave', handleMouseUp)
      }
    }
  }, [isDragging, startX, scrollLeft])

  // Handle container resize for responsive scaling
  useEffect(() => {
    const container = scrollContainerRef.current?.parentElement
    if (!container) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const containerWidth = entry.contentRect.width
        setButtonSize(getButtonSize(containerWidth))
      }
    })

    resizeObserver.observe(container)
    
    // Initial size
    setButtonSize(getButtonSize(container.offsetWidth))

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div className={styles.navBarContainer}>
      <div 
        ref={scrollContainerRef}
        className={styles.scrollContainer}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.buttonContainer}>
          {buttons.map((button) => {
            const isSelected = selected === button.id
            const isHovered = hoveredButton === button.id
            const showSelected = isSelected || isHovered
            
            return (
              <button
                key={button.id}
                className={`${styles.navButton} ${isSelected ? styles.selected : ''}`}
                onClick={() => handleButtonClick(button.id)}
                onMouseEnter={() => handleMouseEnter(button.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundImage: `url(${basePath}/${button.id}/${showSelected ? 'select' : 'unselect'}.png)`,
                  width: `${buttonSize.width}px`,
                  height: `${buttonSize.height}px`,
                  minWidth: `${buttonSize.width}px`
                }}
                aria-label={button.textLines.join(' ')}
              >
                <div className={styles.buttonTextContainer}>
                  <span className={styles.buttonTextWrapper}>
                    {button.textLines.map((line, index) => (
                      <p key={index} className={styles.textLine} style={{fontSize: `${buttonSize.fontSize}px`}}>{line}</p>
                    ))}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HorizontalNavBar
