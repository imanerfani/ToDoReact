import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ToDoApp from './to-do-list-components/to-do-app.jsx'

createRoot(document.getElementById('root')).render(
    <ToDoApp />
)
