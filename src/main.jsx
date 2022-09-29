import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App character={"1"}></App>
    <App character={"2"}></App>
    <App character={"3"}></App>
  </React.StrictMode>
)
