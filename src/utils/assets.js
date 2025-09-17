// Resolve an asset under src/assets with Vite-friendly URL generation
// Example: asset('topbar/logo.png')
export const asset = (relativePath) => {
  return new URL(`../assets/${relativePath}`, import.meta.url).href
}


