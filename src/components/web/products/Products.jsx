import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/Cart';
import { useContext } from 'react';

export default function Products() {
    const {productId} = useParams();
    const {addToCartContext} = useContext(CartContext);
    const getProduct = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
        return data.product;
    }
    const {data,isLoading} = useQuery('product',getProduct);
    const addToCart = async (productId)=>{
        const res = await addToCartContext(productId) ;
    }
    if(isLoading){
        return <p>loading...</p>
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4'>
                {data.subImages.map((img,index)=>
                <div className='w-75' key={index}>
                <img src={img.secure_url} className='w-100' />
                </div>
                
                )}
            </div>
            <div className='col-lg-8' >
                <h2>{data.name}</h2>
                <p>{data.price}</p>
                <button className='btn btn-outline-info' onClick={()=>addToCart(data._id)} >Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
