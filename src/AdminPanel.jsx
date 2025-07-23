import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import './style.css';
import AdminAddProd from './AdminAddProd';
import AdminControls from './AdminControls';

const AdminPanel = () => {
    const [messages, setMessages]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
        const getData= async()=>{
            try {
                const querySnapshot = await getDocs(collection(db, "Messages"));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setMessages(data);
                setLoading(false);
            } catch (err) {
                console.error("Firestore error:", err);
                setError(err.message);
                setLoading(false);
            }
        }
        getData();
    },[])

    console.log("Current state:", { loading, error, messages });
    if (loading) return <div className="loading">Loading messages...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (messages.length === 0) return <div className="no-messages">No messages found</div>;


  return (
    <div className="adminBg">
      <button className='adminControlsBtn' onClick={()=>navigate('/admincontrols')}>Admin Controls</button>
      <h1>Admin Panel - Messages</h1>
      <div className="messagesList">
        {messages.map(message => (
          <div key={message.id} className="messageCard">
            <p><strong>Name:</strong> {message.name}</p>
            <p><strong>Email:</strong> {message.email}</p>
            <p><strong>Subject:</strong> {message.subject}</p>
            <p><strong>Phone:</strong> {message.phone}</p>
            <p><strong>Message:</strong> {message.message}</p>
            <p><small>Received: {new Date(message.timestamp?.toDate()).toLocaleString()}</small></p>
          </div>
          ))}
      </div>
    </div>
    );
};

const App = () => {
  return (
    <Routes>
      <Route path='/adminaddpanel' element={<AdminAddProd/>}/>
      <Route path='/admincontrols' element={<AdminControls/>}/>
    </Routes>
  )}

export default AdminPanel
