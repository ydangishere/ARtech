import React from 'react'
import { asset } from '../utils/assets'

// GameTopBar - a top navigation bar styled like the provided mock
// Props accept image URLs so you can plug in your PNG materials
// without changing the component code.
const GameTopBar = ({
  height = 52,
  backgroundColor = '#2c5f6f',
  bottomStripColor = '#c97a14',
  bottomStripHeight = 4,
  menuIconSrc = asset('topbar/menu.png'),
  logoSrc = asset('topbar/logo.png'),
  titleImgSrc = asset('topbar/title.png'),
  profileIconSrc = asset('topbar/profile.png'),
  bgStripSrc = '', // optional decorative strip image spanning the bottom
  onMenuClick,
  onProfileClick
}) => {
  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor,
        height: `${height}px`,
        minHeight: `${height}px`,
        maxHeight: `${height}px`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        overflow: 'hidden'
      }}
      aria-label="Game top bar"
    >
      {/* Left: hamburger */}
      <button
        onClick={onMenuClick}
        aria-label="Open menu"
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          width: 24,
          height: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: onMenuClick ? 'pointer' : 'default',
          marginRight: 10
        }}
      >
        <img src={menuIconSrc} alt="menu" style={{ width: 16, height: 12 }} />
      </button>

      {/* Logo */}
      <img 
        src={logoSrc} 
        alt="logo" 
        style={{ marginRight: 15 }} 
      />


      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Right: profile */}
      <button
        onClick={onProfileClick}
        aria-label="Open profile"
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          width: 28,
          height: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: onProfileClick ? 'pointer' : 'default'
        }}
      >
        <img src={profileIconSrc} alt="profile" style={{ width: 26, height: 26, borderRadius: 6 }} />
      </button>

      {/* Bottom strip */}
      {bgStripSrc ? (
        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundImage: `url(${bgStripSrc})`,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'left bottom',
            backgroundSize: 'auto',
            height: 'auto',
            minHeight: '4px'
          }}
        />
      ) : (
        <div 
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: bottomStripHeight,
            backgroundColor: bottomStripColor
          }}
        />
      )}
    </div>
  )
}

export default GameTopBar


