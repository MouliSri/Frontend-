import HomePage from './pages/HomePage'
import './index.css'

import {Routes ,Route, Link} from "react-router-dom"
import AddProduct from  "./pages/AddProduct"
import Products from './pages/Products'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UpdateProduct from "./pages/UpdateProduct"


function App() {


  return (
    <>

   <nav className="bg-black text-white w-full h-12 text-center font-bold font-serif p-3">
    <Link to="/">React Crud Products</Link>
   </nav>

  
     <Routes>
      <Route index element={<HomePage />}></Route>
      <Route  path='/products/addproduct' element={<AddProduct />}></Route>
      <Route  path='/products' element={<Products/>}></Route>
      <Route  path='/products/:id' element={<Products/>}></Route>
      <Route  path='/products/updateProduct/:id' element={<UpdateProduct/>}></Route>
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App
