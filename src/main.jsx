import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
    <>
<Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: '#000', // black background
      border: '1px solid #f87171', // light red border (Tailwind red-400)
      color: '#fff',
    },
    success: {
      iconTheme: {
        primary: '#f87171',
        secondary: '#000',
      },
    },
    error: {
      iconTheme: {
        primary: '#f87171',
        secondary: '#000',
      },
    },
  }}
/>        <App />
    </>
)
