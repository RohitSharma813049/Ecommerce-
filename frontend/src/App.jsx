import { Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './user/components/Home/home'
import Pagelayout from './user/pagelayout/pagelayout'
import Page from './user/components/Page/page'
import Products from './user/components/Product/Product'
import Blog from './user/components/Blog/Blog'
import Contact from './user/components/contact/contact'
import Shop from './user/components/shop/Shop'
import ErrorPage from './error/error'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>

  <Routes>
  <Route path="/" element={<Pagelayout/>} >
  <Route index  element={<Home/>} />
  <Route path='page'  element={<Page/>} />
  <Route  path='products' element={<Products/>} />
  <Route  path='Blog'  element={<Blog/>} />
  <Route  path='Shop'  element={<Shop/>} />
  <Route  path='contact' element={<Contact/>} />
  <Route path="*" element={<ErrorPage/>} />
  </Route>
  </Routes>
  <ToastContainer/>
    </>
  )
}

export default App