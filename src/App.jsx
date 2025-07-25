import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home2 from './Home2';
import AboutUs from './AboutUs';
import History from './History';
import './style.css';
import Team from './Team';
import Jacob from './Jacob';
import Services from './Services';
import Portfolio from './Portfolio';
import Blog from './Blog';
import ContactUs from './ContactUs';
import AdminPanel from './AdminPanel';
import AdminAddProd from './AdminAddProd';
import Products from './Products';
import AdminLogin from './AdminLogin';
import AdminSignUp from './AdminSignUp';
import AdminControls from './AdminControls';

const MainApp = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  return (
    <div className='bg'>
      <div className='layout'>
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
                  <button onClick={()=> navigate('/team')} className='dropdownOption'>Team</button>
                </div>
              )}
            </div>
            <button onClick={()=> navigate('/services')} className='navButton'>Services</button>
            <button onClick={()=> navigate('/portfolio')} className='navButton'>Portfolio</button>
            <button onClick={()=> navigate('/blog')} className='navButton'>Blog</button>
            <button onClick={()=> navigate('/contactus')} className='navButton'>Contact Us</button>
            <button onClick={()=>navigate('/products')} className='navButton'>Products</button>
            <button onClick={()=> navigate('/adminlogin')} className='navButton'>Admin Login</button>
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

        <div className='mainContent'>
          <button className='smallTag'>Believe In Quality!</button>
          <h1 className='ContactmsgDe'>
            Quality Trust:
            <br />
            Direct to the Farm
          </h1>
          <p className='subTag'>
            We all need a little space to grow. Give yourself the space you need to find your inner you.
          </p>
        </div>
      </div>
      <div className='features'>
        <div className='featureCard'>
          <h4 className='featureHead'>Professional Farmers</h4>
          <p className='featureDesc'>Nullam porta enim vel tellus commodo,eget laoreet odio ultrices.</p>
        </div>
        <div className='featureCard'>
          <h4 className='featureHead'>Fresh Vegetables</h4>
          <p className='featureDesc'>Nullam porta enim vel tellus commodo,eget laoreet odio ultrices.</p>
        </div>
        <div className='featureCard'>
          <h4 className='featureHead'>Agricultural Products</h4>
          <p className='featureDesc'>Nullam porta enim vel tellus commodo,eget laoreet odio ultrices.</p>
        </div>
        <div className='featureCard'>
          <h4 className='featureHead'>100% Guaranteed</h4>
          <p className='featureDesc'>Nullam porta enim vel tellus commodo,eget laoreet odio ultrices.</p>
        </div>
      </div>

      <div className='about'>
        <img src={require('./farmer.jpg')} className='farmerImg' alt='Farmer' />
        <div className='aboutText'>
          <h2 className='aboutTitle'>Currently we are growing and selling organic food</h2>
          <p className='aboutPara'>
            There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words
            which don't look even.
          </p>
          <div className='aboutHighlight'>
            <h1 className='highlightNum'>*435+</h1>
            <p className='highlightText'>Growth Tons' of Harvest</p>
          </div>
        </div>
      </div>

      <div className='services'>
        <div className='servicesTop'>
          <h1 className='servicesTitle'>Best Agriculture Services</h1>
          <div className='buttons'>
            <button type='button' className='servicesButton'>⬅️</button>
            <button type='button' className='servicesButton'>➡️</button>
          </div>
        </div>
        <div className='servicesCards'>
          <div className='services1'>
            <img src={require('./services1.jpg')} className='servicesImg' alt='Services' />
            <h4 className='serviceCardText'>Harvest Concepts</h4>
            <p className='serviceCardContent'>Farming and animal husbandry and discuss with farmers and scientists.</p>
          </div>
          <div className='services2'>
            <img src={require('./services2.jpg')} className='servicesImg' alt='Services' />
            <h4 className='serviceCardText'>Farming Products</h4>
            <p className='serviceCardContent'>Farming and animal husbandry and discuss with farmers and scientists.</p>
          </div>
          <div className='services3'>
            <img src={require('./services3.jpg')} className='servicesImg' alt='Services' />
            <h4 className='serviceCardText'>Soil Fertilization</h4>
            <p className='serviceCardContent'>Farming and animal husbandry and discuss with farmers and scientists.</p>
          </div>
        </div>
      </div>

      <div className='products'>
        <h1 className='productsTitle'>Choose What's Perfect For Your Field</h1>
        <div className='productsContent'>
          <div className='productCardleft'>
            <div className='agriProd'>
              <h4 className='agriProdTitle'>Agricultural Products</h4>
              <p className='agriProdCont'>Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
            </div>
            <div className='qualityProd'>
              <h4 className='qualityProdTitle'>Agricultural Products</h4>
              <p className='qualityProdCont'>Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
            </div>
          </div>
          <img src={require('./corn.png')} className='cornImg' alt='corn' />
          <div className='productCardRight'>
            <div className='vegProd'>
              <h4 className='vegProdTitle'>Fresh Vegetables</h4>
              <p className='vegProdCont'>Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
            </div>
            <div className='pureProd'>
              <h4 className='pureProdTitle'>Pure & Organic</h4>
              <p className='pureProdCont'>Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='feedback'>
        <h1>What Our Customers Say</h1>
        <div className='feedbackCards'>
          <div className='feedbackCard'>
            <p>“I would recommend practitioners at
            this center to everyone! They are great
            to work with and are excellent trainers.
            Thank you all!'
            </p>
            <div className='feedDetail'>
              <img src={require('./profile.jpg')} className='feedProfile' alt='Profile' />
              <div className='feedName'>
                <h5>
              Daniel Craig
            </h5>
            <h6>CO FOUNDER</h6>
              </div>
            </div>
          </div>
          <div className='feedbackCard'>
            <p>“I would recommend practitioners at
            this center to everyone! They are great
            to work with and are excellent trainers.
            Thank you all!'
            </p>
            <div className='feedDetail'>
              <img src={require('./profile.jpg')} className='feedProfile' alt='Profile' />
              <div className='feedName'>
                
                <h5>
              Daniel Craig
            </h5>
            <h6>CO FOUNDER</h6>
              </div>
            </div>
          </div>
          <div className='feedbackCard'>
            <p>“I would recommend practitioners at
            this center to everyone! They are great
            to work with and are excellent trainers.
            Thank you all!'
            </p>
            <div className='feedDetail'>
              <img src={require('./profile.jpg')} className='feedProfile' alt='Profile' />
              <div className='feedName'>
                <h5>
              Daniel Craig
            </h5>
            <h6>CO FOUNDER</h6>
              </div>
            </div>
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
                <p>Mauris sed molestie sem. Sed vel vestibulum
                elit, non accumsan risus. In vitae sapien viverra
                est Duo ei ullum inani senserit.
                </p>
            </div>
            <div className='footerContentRight'>
                <h2>Professional & modern, a theme designed to help
                your business stand out from the rest.</h2>
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
                        <p>Old Westbury 256, New York
                            <br/>
                            11201, United States</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path='/Team' element={<Team/>}/>
      <Route path='/jacob' element={<Jacob/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/adminpanel' element={<AdminPanel/>}/>
      <Route path='/adminaddpanel' element={<AdminAddProd/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/adminsignup' element={<AdminSignUp/>}/>
      <Route path='/admincontrols' element={<AdminControls/>}/>
    </Routes>
  );
};

export default App;
