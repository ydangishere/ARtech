// For assets used in props, prefer module URLs from src/assets
import { asset } from '../utils/assets'
// Component data registry
export const components = [
  {
    id: 'button-primary',
    name: 'Primary Button',
    description: 'A primary action button with hover effects',
    category: 'Buttons',
    component: 'ButtonPrimary',
    props: {
      text: 'Click Me',
      size: 'medium',
      disabled: false
    }
  },
  {
    id: 'game-topbar',
    name: 'Game Top Bar',
    description: 'A game-like top navigation bar with icons and title',
    category: 'Navigation',
    component: 'GameTopBar',
    props: {
      height: 52,
      backgroundColor: '#2c5f6f',
      bottomStripColor: '#c97a14',
      bottomStripHeight: 4,
      menuIconSrc: asset('topbar/menu.png'),
      logoSrc: asset('topbar/logo.png'),
      titleImgSrc: '', // Use text fallback instead of image
      profileIconSrc: asset('topbar/profile.png'),
      bgStripSrc: asset('topbar/bottom-strip.png')
    }
  },
  {
    id: 'button-secondary',
    name: 'Secondary Button',
    description: 'A secondary action button',
    category: 'Buttons',
    component: 'ButtonSecondary',
    props: {
      text: 'Cancel',
      size: 'medium',
      disabled: false
    }
  },
  {
    id: 'card-simple',
    name: 'Simple Card',
    description: 'A clean card component with title and content',
    category: 'Cards',
    component: 'SimpleCard',
    props: {
      title: 'Card Title',
      content: 'This is a simple card component with some content.',
      image: 'https://via.placeholder.com/300x200'
    }
  },
  {
    id: 'input-text',
    name: 'Text Input',
    description: 'A styled text input with label',
    category: 'Forms',
    component: 'TextInput',
    props: {
      label: 'Your Name',
      placeholder: 'Enter your name',
      value: '',
      required: true
    }
  },
  {
    id: 'modal-basic',
    name: 'Basic Modal',
    description: 'A simple modal dialog component',
    category: 'Modals',
    component: 'BasicModal',
    props: {
      title: 'Modal Title',
      content: 'This is a basic modal dialog.',
      isOpen: true
    }
  },
  {
    id: 'badge-success',
    name: 'Success Badge',
    description: 'A success status badge',
    category: 'Badges',
    component: 'SuccessBadge',
    props: {
      text: 'Success',
      size: 'medium'
    }
  }
]

export const getComponentById = (id) => {
  return components.find(component => component.id === id)
}

export const getComponentsByCategory = (category) => {
  return components.filter(component => component.category === category)
}

export const getCategories = () => {
  const categories = [...new Set(components.map(component => component.category))]
  return categories
}
