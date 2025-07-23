import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const Products = () => {
    const [ products,setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error,setError ] = useState(null);

    const navigate=useNavigate();

    useEffect(()=>{
    const getData=async()=>{
        try{
            const querySnapshot= await getDocs(collection(db,"Products"));
            const data = querySnapshot.docs.map(doc=>({
                id:doc.id,
                ...doc.data()
            }));
            setProducts(data);
            setLoading(false);
        }
        catch(err){
            console.error("Firestore error:",err);
            setError(err.message);
            setLoading(false);
        }
        }
        getData();
    },[])

    if (loading) return <div className="loading">Loading products...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (products.length === 0) return <div className="no-products">No products found.</div>;

  return (
    <div className='productsBg'>
        <h1>Products</h1>
        <div className='productList'>
            {products.map(product=>(
                <button key={product.id} className='productCard'>
                    <p><b>Product:</b> {product.product}</p>
                    <p><b>Cost:</b> {product.cost}</p>
                    <p>Quantity: {product.quantity}</p>
                </button>
            ))}
        </div>
      
    </div>
  )
}

export default Products
