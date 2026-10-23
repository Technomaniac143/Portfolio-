import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const framesDir = path.resolve('public/frames')
const output = path.resolve('public/frames/manifest.json')
const natural = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' })
const files = (await readdir(framesDir)).filter((file) => /\.(webp|png|jpe?g)$/i.test(file)).sort(natural.compare)
let width = 1920
let height = 1080
if (files[0]) {
  const header = await readFile(path.join(framesDir, files[0]))
  const match = header.toString('ascii', 0, Math.min(header.length, 200)).match(/(\d{3,5})x(\d{3,5})/)
  if (match) [width, height] = match.slice(1).map(Number)
}
await writeFile(output, JSON.stringify({ count: files.length, width, height, pattern: files[0] ?? 'frame-%04d.webp', frames: files }, null, 2) + '\n')
console.log(`Wrote ${files.length} frames to ${output}`)
