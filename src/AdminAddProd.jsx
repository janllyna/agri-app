import { app, auth, db } from './firebase';
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import AdminControls from './AdminControls';

const AdminAddProd = () => {
    const [prodName, setProdName]=useState('');
    const[prodCost, setProdCost]=useState('');
    const [prodQty, setProdQty]=useState('');
    const navigate=useNavigate('');

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const docRef= await addDoc(collection(db,"Products"),{
                product:prodName,
                cost:prodCost,
                quantity:prodQty
            })
            console.log("Document written with ID: ", docRef.id);

            setProdName('');
            setProdCost('');
            setProdQty('');

            alert('Your product has been added successfully!');

        }catch(error){
            console.error("Error adding document: ", error);
            alert('There was an error adding the product. Please try again.');
        }
    }

  return (
    <div className='prodAddBg'>
        <button className='adminControlsBtn' onClick={()=>navigate('/admincontrols')}>Admin Controls</button>
        <h1>Enter Product Details</h1>
        <div className='prodDetailsCard'>
            <form className='prodDetail'>
                <label htmlFor='prodName'>
                    <input type='text' id='prodName' placeholder='Product Name' onChange={(e)=>setProdName(e.target.value)}/>
                </label>
            </form>
            <form className='prodDetail'>
                <label htmlFor='prodCost'>
                    <input type='text' id='prodCost' placeholder='Product Cost' onChange={(e)=>setProdCost(e.target.value)}/>
                </label>
            </form>
            <form className='prodDetail'>
                <label htmlFor='prodQty'>
                    <input type='text' id='prodQty' placeholder='Product Quantity' onChange={(e)=>setProdQty(e.target.value)}/>
                </label>
            </form>
        </div>
        <button className='prodAddBtn' onClick={handleSubmit}>Add Product</button>
    </div>
  )
}
const App = ()=>{
    <Routes>
        <Route path='/admincontrols' element={<AdminControls/>}/>
    </Routes>
}

export default AdminAddProd
