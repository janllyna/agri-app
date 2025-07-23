import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminAddProd from './AdminAddProd';
import AdminPanel from './AdminPanel';
import { Route, Routes } from 'react-router-dom';
import MainApp from './App.jsx';

const AdminControls = () => {
    const navigate=useNavigate('')
  return (
    <div className='adminControlsBg'>
        <h1>Admin Controls</h1>
      <button className='AdminMessages' onClick={()=>navigate('/adminpanel')}>Messages</button>
      <button className='AdminAddProducts' onClick={()=>navigate('/adminaddpanel')}>Add Products</button>
      <button className='home' onClick={()=>navigate('/')}>Go Home</button>
    </div>
  )
}
const App=()=>{
    <Routes>
        <Route path='/adminpanel' element={<AdminPanel/>}/>
        <Route path='/adminaddpanel' element={<AdminAddProd/>}/>
        <Route path='/' element={<MainApp/>}/>
    </Routes>
}

export default AdminControls
