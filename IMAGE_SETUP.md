# Image Setup Guide for Local & Vercel Deployment

## Folder Structure
Ensure your images are organized in `src/assets/` as follows:

```
src/
├── assets/
│   ├── Project1/
│   │   ├── 1.png
│   │   ├── 2.png
│   │   ├── 3.png
│   │   └── 4.png
│   ├── Project2/
│   │   ├── 1.png
│   │   ├── 2.png
│   │   ├── 3.png
│   │   ├── 4.png
│   │   └── 5.png
│   └── Project3/
│       ├── 1.png
│       ├── 2.png
│       ├── 3.png
│       ├── 4.png
│       ├── 5.png
│       ├── 6.png
│       ├── 7.png
│       ├── 8.png
│       └── 9.png
```

## How It Works

The `Projects.jsx` component now uses **Vite's dynamic imports** (`import.meta.glob()`) to automatically detect and load all images from the `src/assets/` folder. This approach:

✅ **Works locally** - During development with `npm run dev`
✅ **Works on Vercel** - Images are bundled into the production build
✅ **Auto-discovers images** - No need to manually add every image path
✅ **Automatically sorted** - Images are sorted numerically by filename

## To Add More Images

1. Add your image files to the respective project folder in `src/assets/`
2. Name them sequentially: `1.png`, `2.png`, `3.png`, etc.
3. The component automatically detects and loads them!

## Supported Image Formats
- PNG (.png)
- JPG (.jpg, .jpeg)

## To Deploy to Vercel

1. Push your code with images to GitHub:
   ```bash
   git add .
   git commit -m "Add project images"
   git push
   ```

2. Images will be automatically bundled and served correctly on Vercel!

No need to use a `public/` folder approach - this method is cleaner and more reliable.
