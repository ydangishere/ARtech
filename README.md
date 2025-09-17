# React Component Gallery

A modern React component library with live preview and sharing capabilities.

## Features

- 🎨 **Component Gallery**: Browse all available components in a beautiful grid layout
- 🔍 **Live Preview**: See components in action with real-time preview
- ⚙️ **Props Editor**: Modify component properties and see changes instantly
- 🔗 **Shareable Links**: Each component has its own unique URL for easy sharing
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🚀 **GitHub Pages Ready**: Deploy to GitHub Pages with one click

## Live Demo

Visit the live demo: [https://yourusername.github.io/react-component-gallery](https://yourusername.github.io/react-component-gallery)

## Available Components

### Buttons
- **Primary Button**: Main action button with hover effects
- **Secondary Button**: Secondary action button

### Cards
- **Simple Card**: Clean card component with title, content, and image

### Forms
- **Text Input**: Styled text input with label and validation

### Modals
- **Basic Modal**: Simple modal dialog component

### Badges
- **Success Badge**: Status indicator badge

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-component-gallery.git
cd react-component-gallery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/react-component-gallery`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ButtonPrimary.jsx
│   ├── ButtonSecondary.jsx
│   ├── SimpleCard.jsx
│   ├── TextInput.jsx
│   ├── BasicModal.jsx
│   ├── SuccessBadge.jsx
│   ├── ComponentRenderer.jsx
│   └── Header.jsx
├── pages/              # Page components
│   ├── Gallery.jsx     # Main gallery page
│   └── ComponentPreview.jsx  # Individual component preview
├── data/               # Component registry
│   └── components.js
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Adding New Components

1. Create your component in `src/components/`
2. Add it to the component registry in `src/data/components.js`
3. Import it in `src/components/ComponentRenderer.jsx`
4. Your component will automatically appear in the gallery!

### Example Component

```jsx
// src/components/MyComponent.jsx
import React from 'react'

const MyComponent = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default MyComponent
```

### Register Component

```javascript
// src/data/components.js
export const components = [
  // ... existing components
  {
    id: 'my-component',
    name: 'My Component',
    description: 'A custom component',
    category: 'Custom',
    component: 'MyComponent',
    props: {
      title: 'Hello World',
      content: 'This is my component'
    }
  }
]
```

## Customization

### Styling
- Global styles are in `src/index.css`
- Component styles use inline styles for simplicity
- You can easily switch to CSS modules or styled-components

### Adding Categories
- Categories are automatically generated from component data
- No additional configuration needed

### Custom Props Editor
- The props editor automatically generates based on component props
- Supports text, number, and boolean inputs
- Easy to extend for more complex prop types

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help, please open an issue on GitHub.
