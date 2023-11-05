import React from 'react'
import {useState,useEffect} from "react"
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Products = () => {
   

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
      try{
         setIsLoading(true); 
         const response = await axios.get("https://backendserver-t2za.onrender.com/products");
         console.log(response)
        
         setProducts(response.data);
         setIsLoading(false);

      } catch (error){
         console.log(error);
      }
  }

  useEffect(() => {
      getProducts();
  }, [])

  return (
    <div className='grid grid-cols-1  md:grid-cols-3 gap-5'>
          {isLoading ? (
                 <div >     <iframe src="https://giphy.com/embed/r3xBH1FXWz0h55CVtj" width="480" height="480" frameBorder="0"    class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/trt-network-trt-1-seksenler-r3xBH1FXWz0h55CVtj"></a></p> </div>
   
                ) : (
                    <>
                    {products.length > 0 ? (
                        <>

                            {
                                products.map((product, index) => {
                                   return (
                                     <ProductCard key={index} product={product} getProducts={getProducts}/>
                                   )
                                })
                            }
                        </>
                    ) : (
                        <div>
                            There is no product
                        </div>
                    )}
                    
                    </>
                )}
      </div>
  )
}

export default Products