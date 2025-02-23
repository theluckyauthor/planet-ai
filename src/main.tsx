// Import base styles first
import './styles/globals.css'
// Then component styles
import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById("root")!).render(<App />);
