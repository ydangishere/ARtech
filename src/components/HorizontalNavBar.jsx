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
  // Get button size based on viewport width
  const getButtonSize = () => {
    // Không scale gì từ 390px đến 768px, sau đó mới scale lên đến giá trị max ở 1440px
    const mobileWidth = 105 // Kích thước cố định cho width từ 390px đến 768px
    const mobileHeight = 42 // Kích thước cố định cho height từ 390px đến 768px
    const mobileFontSize = 12 // Kích thước cố định cho font từ 390px đến 768px
    
    const tabletWidth = 105 // Vẫn giữ nguyên kích thước ở tablet 768px
    const tabletHeight = 42 // Vẫn giữ nguyên kích thước ở tablet 768px
    const tabletFontSize = 12 // Vẫn giữ nguyên kích thước ở tablet 768px
    
    const desktopWidth = 130 // Kích thước mộc tiêu trên màn hình 1440px
    const desktopHeight = 48 // Kích thước mộc tiêu trên màn hình 1440px
    const desktopFontSize = 14 // Kích thước mộc tiêu trên màn hình 1440px
    
    // Lấy viewport width hiện tại để quyết định kích thước
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 390

    // Nếu viewport width nhỏ hơn hoặc bằng 768px, sử dụng kích thước cố định
    if (viewportWidth <= 768) {
      return {
        width: `${mobileWidth}px`,
        height: `${mobileHeight}px`,
        fontSize: `${mobileFontSize}px`
      }
    } 
    // Nếu lớn hơn 768px, scale từ tablet đến desktop theo tỷ lệ
    else {
      const scaleRatio = Math.min(1, (viewportWidth - 768) / (1440 - 768))
      const scaledWidth = tabletWidth + (desktopWidth - tabletWidth) * scaleRatio
      const scaledHeight = tabletHeight + (desktopHeight - tabletHeight) * scaleRatio
      const scaledFontSize = tabletFontSize + (desktopFontSize - tabletFontSize) * scaleRatio
      
      return {
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
        fontSize: `${scaledFontSize}px`
      }
    }
    
    // Code này không cần vì đã return trước đó rồi
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

  // Update button size based on viewport size
  useEffect(() => {
    const handleResize = () => {
      setButtonSize(getButtonSize())
    }

    // Set initial size
    handleResize()

    // Add resize listener
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
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
                  width: buttonSize.width,
                  height: buttonSize.height,
                  minWidth: buttonSize.width
                }}
                aria-label={button.textLines.join(' ')}
              >
                <div className={styles.buttonTextContainer}>
                  <span className={styles.buttonTextWrapper}>
                    {button.textLines.map((line, index) => (
                      <p key={index} className={styles.textLine} style={{fontSize: buttonSize.fontSize}}>{line}</p>
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
