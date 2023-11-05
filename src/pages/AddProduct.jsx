import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';

const AddProduct = () => {

  const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productColour, setProductColour] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productDescription,setProductDescription]=useState("")
    const [productReview,setProductReview]=useState([])
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const saveProduct = async(e) => {
        e.preventDefault();
        if(productName === "" || productQuantity === "" || productPrice === "" || productColour === ""){
            alert('Please fill out all input completely');
            return;
        }
        try{
            setIsLoading(true);
            const data={productName: productName,productPrice: productPrice, productColour: productColour,productQuantity: productQuantity,productDescription:productDescription,productReview:productReview};
             await axios.post("https://backendserver-t2za.onrender.com/products/addproduct",data);
            toast.success(`Save ${productName} sucessfully`);
            setIsLoading(false);
            navigate("/");
        }catch (error){
            toast.error(error.message);
            setIsLoading(false);
        }
    }

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Create a Product
            </h2>
            <form onSubmit={saveProduct}>
                <div className="space-y-2">
                    <div>
                        <label>Name</label>
                        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name" />
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="number" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Quantity" />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Price" />
                    </div>
                    <div>
                        <label>Colour</label>
                        <input type="text" value={productColour} onChange={(e) => setProductColour(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Colour" />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Description" />
                    </div>
                    <div>
                        
                    { !isLoading && ( <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Save</button>)}         
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct