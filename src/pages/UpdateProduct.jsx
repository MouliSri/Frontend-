import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateProduct = () => {

  let {id}=useParams()
  const navigate=useNavigate();

  const [isLoading,setIsLoading]=useState(false)

  const [product,setProduct]=useState({
    productName:"",
    productPrice: "",
    productColour:"",
    productQuantity:"",
    productDescription:"",
    productReview:[]
  });

    const getFunction=async()=>{

    try {
      setIsLoading(true)
      const response=await axios.get(`https://backendserver-t2za.onrender.com/products/${id}`)
      setProduct({
        productName:response.data.productName,
        productPrice:response.data.productPrice,
        productColour:response.data.productColour,
        productQuantity:response.data.productQuantity,
        productDescription:response.data.productDescription
      })
    
      setIsLoading(false)

    } catch (error) {
      setIsLoading(false)
      toast.error(error)
    }
   }

 


    const updateFunction=async(e)=>{
      e.preventDefault();
      setIsLoading(true);
      try{
          await axios.put(`https://backendserver-t2za.onrender.com/products/updateProduct/${id}`, product);
          toast.success("Update a product successfully");
          navigate('/');
      }catch(error){
          setIsLoading(false);
          toast.error(error.message);
      }
    }

    useEffect(()=>{
      getFunction()
     },[])





  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
        <h2 className="font-semibold text-2xl mb-4 block text-center">
            Update a Product
        </h2>
        { isLoading ? ("Loading") : (
            <>
                <form onSubmit={updateFunction}>
                    <div className="space-y-2">
                        <div>
                            <label>Name</label>
                            <input type="text" value={product.productName} onChange={(e) => setProduct({...product, productName: e.target.value})}  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name" />
                        </div>
                        <div>
                            <label>Color</label>
                            <input type="text" value={product.productColour} onChange={(e) => setProduct({...product, productColour: e.target.value})}  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Colour" />
                        </div>
                        <div>
                            <label>Quantity</label>
                            <input type="number" value={product.productQuantity} onChange={(e) => setProduct({...product, productQuantity: e.target.value})}  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Quantity" />
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="number" value={product.productPrice} onChange={(e) => setProduct({...product, productPrice: e.target.value})} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Price" />
                        </div>
                        <div>
                            <label>Description</label>
                            <input type="text" value={product.productDescription} onChange={(e) => setProduct({...product, productDescription: e.target.value})}  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Description" />
                        </div>
                        <div>
                            { !isLoading && ( <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Update</button>)}         
                        </div>
                    </div>
                </form>
            </>
        )}

    </div>
  )
}

export default UpdateProduct
