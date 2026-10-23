# Kameshwaran B portfolio

A cinematic single-page portfolio with a red glassmorphism visual system and a scroll-driven name reveal.

## Replace the frame sequence

Place sorted `.webp` frames in `public/frames` (optional mobile frames can live in `public/frames-sm`). Then regenerate the manifest:

```bash
node scripts/generate-manifest.mjs
```

The manifest records `count`, `width`, `height`, `pattern`, and the naturally sorted file names. The page is intentionally resilient when frames are not present: it renders the lockup and copy without a blank canvas.

## Deploy

This is a static HTML project and can be deployed to Vercel or Netlify. Import the repository, select the project root, and deploy with no build command. If you add a build step, run `node scripts/generate-manifest.mjs` before publishing.
