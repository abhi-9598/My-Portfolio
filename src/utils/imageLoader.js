/**
 * Image loader utility for dynamic asset imports
 * Works on both local development and production (Vercel)
 */

// Dynamic image imports using Vite's glob import
const imageModules = import.meta.glob('../assets/**/*.{png,jpg,jpeg}', { eager: true })

/**
 * Helper function to get sorted image paths for a specific project folder
 * @param {string} folder - Project folder name (e.g., 'Project1', 'Project2')
 * @returns {array} Array of image paths sorted numerically
 */
export const getImagePaths = (folder) => {
  const paths = Object.keys(imageModules)
    .filter(path => path.includes(`/${folder}/`))
    .sort((a, b) => {
      // Extract number from filename (1.png, 2.png, etc.)
      const numA = parseInt(a.match(/\/(\d+)\./)?.[1] || '0')
      const numB = parseInt(b.match(/\/(\d+)\./)?.[1] || '0')
      return numA - numB
    })
    .map(path => imageModules[path].default)
  
  return paths
}
