import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import SimpleCard from './SimpleCard'
import TextInput from './TextInput'
import BasicModal from './BasicModal'
import SuccessBadge from './SuccessBadge'
import GameTopBar from './GameTopBar'

const ComponentRenderer = ({ componentName, props }) => {
  const components = {
    ButtonPrimary,
    ButtonSecondary,
    SimpleCard,
    TextInput,
    BasicModal,
    SuccessBadge,
    GameTopBar
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
