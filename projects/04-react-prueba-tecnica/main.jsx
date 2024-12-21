import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'

const rooot = createRoot(document.getElementById('app'))
rooot.render(
		<App />
)
