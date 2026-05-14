import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ProductPage from './pages/ProductPage'
import EcommerceProvider from './providers/EcommerceProvider'

function App() {
  return (
    <EcommerceProvider>
      <ProductPage/>
      </EcommerceProvider>
    
  )
}

export default App
