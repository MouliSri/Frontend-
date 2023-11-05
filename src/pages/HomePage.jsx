import React from 'react'
import { Link } from 'react-router-dom'





const HomePage= () => {
  return (
    <div className='flex  flex-row'>
  <div className='h-48 sm:min-h-screen  sm:w-1/6  bg-zinc-800 text-white text-xl font-serif '>
  
  <div className=' p-2'>
  <Link to="/products" > <h1 className=' pl-5 pt-5'>Products</h1></Link>

  <Link to="/products/addproduct" > <h1 className=' pl-5 pt-5'>Add Product</h1> </Link>

  </div>

  </div>

  <div className=' text-center mx-auto my-10'>
  
    <h1 className='text-2xl text-red-400 font-mono'> Hello all this React Crud Project</h1>
  </div>

  </div>
  )
}

export default HomePage