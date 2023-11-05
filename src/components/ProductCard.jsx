import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from "react-toastify";

import Swal from 'sweetalert2'

const ProductCard = ({ product,getProducts}) => {
   
    const deleteFunction=async(id)=>{
        const result = await Swal.fire({
            title: 'Do you really want to delete the product?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'

        })
        if(result.isConfirmed){
            try{
                await axios.delete(`https://backendserver-t2za.onrender.com/products/deleteProduct/${id}`);
                toast.success("Delete a product successfully");
                getProducts();
            }catch(error){
                toast.error(error.message);
            }
        }
    }


  return (
    <div key={product._id} className=' w-full h-56 p-5  ml-2  shadow-lg shadow-blue-600   mt-5  rounded-md border-2 border-blue-100 text-center'>

        <h1>ProductName:{product.productName}</h1>
        <h3>productPrice:{product.productPrice}</h3>
        <p>productColour:{product.productColour}</p>
        <p>productQuantity:{product.productQuantity}</p>
        <p>productDescription:{product.productDescription}</p>

        <button className='hover:scale-90'><Link  className="bg-blue-800 p-3 m-3 rounded-lg border-2  border-black   hover:bg-white"  to={`/products/updateProduct/${product._id}`}>Update</Link></button>
        <button className="bg-blue-800 p-3 m-3 rounded-lg  border-2  border-black hover:scale-90 hover:bg-white " onClick={() => deleteFunction(product._id)}>Delete</button>
       
    </div>
  )
}

export default ProductCard