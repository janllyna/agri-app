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
import ContactUs from './ContactUs';

const Blog = () => {
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
    <div className='Blogbg'>
      <div className='Bloglayout'>
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
          <h1 className='tagLine'>
            Blog
          </h1>
        </div>
      </div>
      
      <div className='Blogfeaturesbg'>
        <div className='Blogfeatures'>
          <div className='BlogCard'>
            <img src={require('./feature1.jpg')} className='blogimg' alt='harvest' />
            <h3 className='blogHead'>What technology is used in vertical
farming?</h3>
          </div>
          <div className='BlogCard'>
            <img src={require('./feature2.jpg')} className='blogimg' alt='harvest' />
            <h3 className='blogHead'>Which type of farming is more
prevalent today?</h3>
          </div>
          <div className='BlogCard'>
            <img src={require('./feature3.jpg')} className='blogimg' alt='harvest' />
            <h3 className='blogHead'>The Farmers Sentiment Darkens
Hopes Fade</h3>
          </div>
        </div>
        <div className='Blogfeatures'>
          <div className='BlogCard'>
            <img src={require('./market.jpg')} className='blogimg' alt='harvest' />
            <h3 className='blogHead'>A farmer is a person who works in
agriculture.</h3>
          </div>
          <div className='BlogCard'>
            <img src={require('./services1.jpg')} className='blogimg' alt='harvest' />
            <h3 className='blogHead'>Organic Fruits: Hidden Advantages
And Information</h3>
          </div>
          <div className='BlogCard'>
            <img src={require('./services2.jpg')} className='blogimg' alt='harvest' />
            <h3 className='blogHead'>How to Include Organic Vegetables
in Your Diet</h3>
          </div> 
        </div>
        <div className='Blogfeatures'>
          <div className='BlogCard'>
            <img src={require('./team3.jpg')} className='blogimg' alt='harvest' />
            <h3 className='blogHead'>Agricultural Infrastructures in  the Rural
Areas</h3>
          </div>
          <div className='BlogCard'>
            <img src={require('./team4.jpg')} className='blogimg' alt='harvest' />
            <h3 className='blogHead'>Are You Prepared for the Upcoming
Season?</h3>
          </div>
          <div className='BlogCard'>
            <img src={require('./team5.jpeg')} className='blogimg' alt='harvest' />
            <h3 className='blogHead'>A Beginner’s Guide for Managing a
Successful Farm</h3>
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
    </Routes>
  );
};

export default Blog;