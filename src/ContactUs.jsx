import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainApp from './App';
import Home2 from './Home2';
import AboutUs from './AboutUs';
import History from './History';
import './style.css';
import Team from './Team';
import Jacob from './Jacob';
import Services from './Services';
import Portfolio from './Portfolio';
import Blog from './Blog';
import { app, auth, db } from './firebase';
import { addDoc, collection } from "firebase/firestore";
import AdminPanel from './AdminPanel';
import Products from './Products';

const ContactUs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const [contactName, setContactName] = useState('');
  const [contactMail, setContactMail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const docRef = await addDoc(collection(db, "Messages"), {
        name: contactName,
        email: contactMail, 
        subject: contactSubject,
        phone: contactPhone,
        message: contactMsg, 
        timestamp: new Date() 
      });
      
      console.log("Document written with ID: ", docRef.id);
      
      
      setContactName('');
      setContactMail('');
      setContactSubject('');
      setContactPhone('');
      setContactMsg('');
      
      alert('Your message has been sent successfully!');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className='ContactUsbg'>
      <div className='ContactUslayout'>
        <div className='topBar'>
          <div className='logo'>
            <img src={require('./logo.jpg')} className='logoImg' alt='Logo' />
          </div>
          <div className='navBar'>
            <div className='dropdown'>
              <button className='navButton' onClick={toggleDropdown}>
                Home {isDropdownOpen ? '▲' : '▼'}
              </button>
              {isDropdownOpen && (
                <div className='dropdown-content'>
                  <button onClick={() => navigate('/')} className='dropdownOption'>Home 1</button>
                  <button onClick={() => navigate('/home2')} className='dropdownOption'>Home 2</button>
                </div>
              )}
            </div>
            <div className='dropdown'>
              <button className='navButton' onClick={togglePagesDropdown}>
                Pages {isPagesDropdownOpen ? '▲' : '▼'}
              </button>
              {isPagesDropdownOpen && (
                <div className='dropdown-content'>
                  <button onClick={() => navigate('/AboutUs')} className='dropdownOption'>About Us</button>
                  <button onClick={() => navigate('/history')} className='dropdownOption'>History</button>
                  <button onClick={() => navigate('/team')} className='dropdownOption'>Team</button>
                </div>
              )}
            </div>
            <button onClick={() => navigate('/services')} className='navButton'>Services</button>
            <button onClick={() => navigate('/portfolio')} className='navButton'>Portfolio</button>
            <button onClick={() => navigate('/blog')} className='navButton'>Blog</button>
            <button onClick={() => navigate('/contactus')} className='navButton'>Contact Us</button>
            <button onClick={()=>navigate('/products')} className='navButton'>Products</button>
          </div>
          <div className='contact'>
            <button className='call'>Call us</button>
            <form className='search'>
              <label htmlFor="search">
                <input type='text' id='search' placeholder='🔍' />
              </label>
            </form>
            <button className='touch'>Get in Touch</button>
          </div>
        </div>

        <div className='AboutUsmainContent'>
          <h1 className='tagLine'>Contact Us</h1>
        </div>
      </div>

      <div className='contactFeatures'>
        <div className='contactCard'>
          <h4>Mail Us 24/7</h4>
          <p>pbminfo@admin.com<br />pbmadmin@info.com</p>
        </div>
        <div className='contactCard'>
          <h4>Call Us 24/7</h4>
          <p>Phone : (+55) 654 - 545 - 5418<br />Mobile : (+01) 654 - 545 - 1235</p>
        </div>
        <div className='contactCard'>
          <h4>Our Locations</h4>
          <p>4821 Ride Top, Anch St, Alaska<br />997998, USA main city.</p>
        </div>
      </div>

      <div className='contactMessage'>
        <h1>Have Any Questions?<br />Get In Touch!</h1>
        <div className='ContactmsgSection'>
          <img src={require('./team1.jpg')} className='contactImg' alt='contact' />
          <div className='contactUsDetails'>
            <div className='ContactmsgDetails'>
              <form className='ContactnameDetail'>
                <label htmlFor='contactName'></label>
                <input type='text' id='contactName' placeholder='Your Name' onChange={(e) => setContactName(e.target.value)} />
              </form>
              <form className='ContactmailDetail'>
                <label htmlFor='contactMail'></label>
                <input type='text' id='contactMail' placeholder='Your Mail ID' onChange={(e) => setContactMail(e.target.value)} />
              </form>
            </div>
            <div className='ContactmsgDetails'>
              <form className='ContactsubjectDetail'>
                <label htmlFor='contactSubject'></label>
                <input type='text' id='contactSubject' placeholder='Subject' onChange={(e) => setContactSubject(e.target.value)} />
              </form>
              <form className='ContactphoneDetail'>
                <label htmlFor='contactPhone'></label>
                <input type='text' id='contactPhone' placeholder='Phone No.' onChange={(e) => setContactPhone(e.target.value)} />
              </form>
            </div>
            <form className='msgOption'>
              <label htmlFor='contactMsg'></label>
              <input type='text' id='contactMsg' placeholder='Your message...' onChange={(e)=>setContactMsg(e.target.value)}/>
            </form>
            <button className='contactMsgSubmitBtn' onClick={handleSubmit}>Submit Now</button>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='footerLeft'><p>FARMERS</p> <p>‧</p> <p>ORGANIC</p> <p>‧</p> <p>FOODS</p> <p>‧</p> <p>PRODUCT</p></div>
        <div className='footerRight'><p>Call: + 1(212) 255-511</p> <p>Email: noreply@pbminfotech.com</p></div>
      </div>

      <div className='footerContentBg'>
        <div className='footerContent'>
          <div className='footerContentLeft'>
            <img src={require('./logo.jpg')} className='logoImg' alt='Logo' />
            <p>Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus. In vitae sapien viverra est Duo ei ullum inani senserit.</p>
          </div>
          <div className='footerContentRight'>
            <h2>Professional & modern, a theme designed to help your business stand out from the rest.</h2>
            <div className='footerContentRightSub'>
              <div className='link'>
                <p><b>Useful link</b></p>
                <p>Company</p>
                <p>About</p>
                <p>Contact</p>
              </div>
              <div className='time'>
                <p><b>Working Time</b></p>
                <p>Mon - Fri: 9.00am - 5.00pm</p>
                <p>Saturday: 10.00am - 6.00pm</p>
                <p>Sunday Closed</p>
              </div>
              <div className='address'>
                <p><b>Our Address</b></p>
                <p>Old Westbury 256, New York<br />11201, United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Define App separately and export it
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/history" element={<History />} />
      <Route path="/team" element={<Team />} />
      <Route path="/jacob" element={<Jacob />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path='/adminpanel' element={<AdminPanel/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
  );
};

export default ContactUs;