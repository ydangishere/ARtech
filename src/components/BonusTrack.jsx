import React from 'react'
import styles from './BonusTrack.module.css'

// BonusTrack button
// - Renders a banner-like button with PNG background (passed via props)
// - Text uses Program OT Bold (declared globally via @font-face in src/index.css)
// Props:
//   - text: string (default: 'BONUS TRACK')
//   - bgSrc: string URL to normal PNG background (required)
//   - bgHoverSrc: string URL to hover/selected PNG background (optional, defaults to bgSrc)
//   - selected: boolean to force selected state (applies hover background)
const BonusTrack = ({ text = 'BONUS TRACK', bgSrc = '', bgHoverSrc = '', selected = false }) => {
  const styleVars = {
    '--bg-url': `url(${bgSrc})`,
    '--bg-hover-url': `url(${bgHoverSrc || bgSrc})`
  }

  return (
    <div className={`${styles.bonusUnselect} ${selected ? styles.selected : ''}`} style={styleVars} role="button" aria-label={text}>
      <div className={styles.bonusTrack}>{text}</div>
    </div>
  )
}

export default BonusTrack
