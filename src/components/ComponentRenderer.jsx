import React from 'react'
import GameTopBar from './GameTopBar'
import SpecialOffer from './SpecialOffer'
import BonusTrack from './BonusTrack'
import HorizontalNavBar from './HorizontalNavBar'
import HeaderTitle from './HeaderTitle'

const ComponentRenderer = ({ componentName, props }) => {
  const components = {
    GameTopBar,
    SpecialOffer,
    BonusTrack,
    HorizontalNavBar,
    HeaderTitle
  }

  const Component = components[componentName]
  
  if (!Component) {
    return (
      <div style={{ color: '#dc3545', textAlign: 'center' }}>
        Component "{componentName}" not found
      </div>
    )
  }

  return <Component {...props} />
}

export default ComponentRenderer
