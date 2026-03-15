import { renderToString } from 'react-dom/server'
import { readFileSync, writeFileSync } from 'fs'
// @ts-ignore
import App from '../src/App'

// @ts-ignore
const html = renderToString(<App />)
const template = readFileSync('dist/index.html', 'utf-8')
const output = template.replace(
  '<div id="root"></div>',
  `<div id="root">${html}</div>`,
)
writeFileSync('dist/index.html', output)

console.log('Prerendered dist/index.html')
