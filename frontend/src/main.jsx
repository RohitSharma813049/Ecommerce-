import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { WishlistProvider } from './user/context/WishlistContext'
import { CartProvider } from './user/context/Cartcontext'


ReactDOM.createRoot(document.getElementById('root')).render(

   <WishlistProvider>
   <CartProvider>
     <BrowserRouter>
    <App />
  </BrowserRouter>
   </CartProvider>
  
 </WishlistProvider>
)
