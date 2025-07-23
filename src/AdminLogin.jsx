import {React, useState} from 'react';
import './App.css';
import './LoginPage.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {loginauth, loginapp, logindb} from './login_friebase'
import { useNavigate } from 'react-router-dom';
import AdminSignUp from './AdminSignUp';
import { Route, Routes } from 'react-router-dom';
import AdminControls from './AdminControls';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate('')

    const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try{
        await signInWithEmailAndPassword(loginauth, email, password);
        alert("Login Successful");
        navigate('/admincontrols');
    }catch(err){
        setError(err.message);
    }
    setLoading(false);
}


  return (
    <div className='Layout'>
      <div className='middleLayout'>
        <div className='loginDetails'>
          <h2>Login</h2>
          <div className='Details'>
            <form className='emailID'>
              <label htmlFor='email'>
                <input type="text" id='email' placeholder='Email Address'onChange={(e)=>setEmail(e.target.value)}/>
              </label>
            </form>
            <form className='Password'>
              <label htmlFor='password'>
                <input type='password' id='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
              </label>
            </form>
          </div>
          <div className='otherOptions'>
            <form className='rememberButton'>
              <input type='checkbox' />
              <label htmlFor='remeberBut'>Remember Me</label>
            </form>
            <a href='' className='forgotPassword'>
              Forgot Password?
            </a>
          </div>
          <div className='actionButtons'>
            <div className='loginButton'>
              <button className='Login' onClick={handleLogin}>
                Login
              </button>

            </div>
            <div className='socialAccount'>
              <button className='socialLogin'>
                Login with Social Account
              </button>
            </div>
            <div className='signUpButton'>
              <button className='signUp' onClick={()=>navigate('/adminsignup')}>
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const App = ()=>{
    <Routes>
        <Route path='/signup' element={<AdminSignUp/>}/>
        <Route path='/admincontrols' element={<AdminControls/>}/>
    </Routes>
}

export default AdminLogin