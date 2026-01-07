import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './user/components/Home/home'
import Pagelayout from './user/pagelayout/pagelayout'
import Page from './user/components/Page/page'
import Products from './user/components/Product/Product'
import Blog from './user/components/Blog/Blog'
import Contact from './user/components/contact/contact'
import Shop from './user/components/shop/Shop'
import Wishlist from './user/components/Wishlist/wishlist'
import Cart from './user/components/cart/cart'

import Accountlayout from './user/Accounts/accountlayout'
import Login from './user/Accounts/login'
import Register from './user/Accounts/register'

import ErrorPage from './error/error'
import { ToastContainer } from 'react-toastify'
import CategoryPage from './user/components/Home/category/category'

function App() {
  return (
    <>
      <Routes>

        {/* Main Website Layout */}
        <Route path="/" element={<Pagelayout />}>
          <Route index element={<Home />} />
          <Route path="page" element={<Page />} />
          <Route path="products" element={<Products />} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
      <Route path="category/:categoryName" element={<CategoryPage/>} />

          {/* Account Pages */}
          <Route path="login" element={<Accountlayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>

        {/* Global 404 */}
        <Route path="*" element={<ErrorPage />} />

      </Routes>

      <ToastContainer />
    </>
  )
}

export default App
