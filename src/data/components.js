// For assets used in props, prefer module URLs from src/assets
import { asset } from '../utils/assets'
// Component data registry
export const components = [
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
    id: 'special-offer',
    name: 'Special Offer',
    description: 'Banner button with PNG background and Program OT Bold',
    category: 'Buttons',
    component: 'SpecialOffer',
    props: {
      text: 'SPECIAL OFFERS',
      // PNG background expected at public/assets/special-offer/bg.png
      // Using absolute path with Vite base '/ARtech/' for GitHub Pages compatibility
      bgSrc: '/ARtech/assets/special-offer/bg.png',
      bgHoverSrc: '/ARtech/assets/special-offer/bg-selected.png',
      selected: false
    }
  },
  {
    id: 'bonus-track',
    name: 'Bonus Track',
    description: 'Banner button with PNG background and Program OT Bold',
    category: 'Buttons',
    component: 'BonusTrack',
    props: {
      text: 'BONUS TRACK',
      // PNG background expected at public/assets/bonus-track/bg.png
      // Using absolute path with Vite base '/ARtech/' for GitHub Pages compatibility
      bgSrc: '/ARtech/assets/bonus-track/bg.png',
      bgHoverSrc: '/ARtech/assets/bonus-track/bg-selected.png',
      selected: false
    }
  },
  {
    id: 'horizontal-nav-bar',
    name: 'Horizontal Nav Bar',
    description: 'Horizontal scrollable navigation bar with 5 buttons, responsive and touch-friendly',
    category: 'Navigation',
    component: 'HorizontalNavBar',
    props: {
      selectedButton: 'special-store',
      basePath: '/ARtech/assets/nav-buttons'
    }
  }
]

export const getComponentById = (id) => {
  return components.find(component => component.id === id && !component.hidden)
}

export const getComponentsByCategory = (category) => {
  return components.filter(component => component.category === category && !component.hidden)
}

export const getCategories = () => {
  const categories = [...new Set(components.filter(c => !c.hidden).map(component => component.category))]
  return categories
}

export const getVisibleComponents = () => {
  return components.filter(c => !c.hidden)
}
