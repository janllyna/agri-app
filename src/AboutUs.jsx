import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainApp from './App';
import Home2 from './Home2';
import History from './History';
import './style.css';
import Team from './Team';
import Jacob from './Jacob';
import Services from './Services';
import Portfolio from './Portfolio';
import Blog from './Blog';
import ContactUs from './ContactUs';

const AboutUs = () => {
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
    <div className='AboutUsbg'>
      <div className='AboutUslayout'>
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
            About Us
          </h1>
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
      <div className='aboutUsfeaturesbg'>
        <h1>Best Agriculture Services</h1>
        <div className='aboutUsfeatures'>
          <div className='aboutUsfeatureCard'>
            <img src={require('./feature1.jpg')} className='featureimg' alt='harvest' />
            <h4 className='featureHead'>Professional Farmers</h4>
          </div>
          <div className='aboutUsfeatureCard'>
            <img src={require('./feature2.jpg')} className='featureimg' alt='harvest' />
            <h4 className='featureHead'>Fresh Vegetables</h4>
          </div>
          <div className='aboutUsfeatureCard'>
            <img src={require('./feature3.jpg')} className='featureimg' alt='harvest' />
            <h4 className='featureHead'>Agricultural Products</h4>
          </div>
          <div className='aboutUsfeatureCard'>
            <img src={require('./feature4.jpg')} className='featureimg' alt='harvest' />
            <h4 className='featureHead'>100% Guaranteed</h4>
          </div>
        </div>
      </div>
      <div className="eco-section">
        <div className="green-banner">
          <div className="text-content">
            <button className="discoverBtn">Discover About Us</button>
            <div className='aboutAgri'>
              <h2>Agriculture matters to the<br />future of development</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
              </p>
            </div>
          </div>

          <div className="image-steps">
            <img src={require('./farmer.jpg')} alt="Farmer Talk" className="farmerImage" />
            <div className="steps">
              <div className="step"><span>01</span> Schedule Your Experience <span>Quisqu tell us risus adpis viera
bibe um urna.</span></div>
              <div className="step"><span>02</span> Get Professional Advice <span>Quisqu tell us risus adpis viera
bibe um urna.</span></div>
              <div className="step"><span>03</span> Meet Our Expert Farmer <span>Quisqu tell us risus adpis viera
bibe um urna.</span></div>
              <div className="step"><span>04</span> Now Get A Best Products <span>Quisqu tell us risus adpis viera
bibe um urna.</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="past">
        <button className="historyBtn">Our History</button>
        <div className='aboutPast'>
          <h2>Farming have been since<br/> 1866</h2>
          <p>
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even.
          </p>
        </div>
      </div>
      <div className='timeLine'>
        <div className='timeLineCard'>
          <h1>1987</h1>
          <h5>Open My Farm</h5>
          <p>Corrupti ut consequatur magni minus!
Iusto eos consectetur similique minus
culpa odio temporibus.</p>
        </div>
        <div className='timeLineCard'>
          <h1>1910</h1>
          <h5>Farm Remodelacion</h5>
          <p>Corrupti ut consequatur magni minus!
Iusto eos consectetur similique minus
culpa odio temporibus.</p>
        </div>
        <div className='timeLineCard'>
          <h1>1995</h1>
          <h5>Grainfarmers Formed</h5>
          <p>Corrupti ut consequatur magni minus!
Iusto eos consectetur similique minus
culpa odio temporibus.</p>
        </div>
        <div className='timeLineCard'>
          <h1>2000</h1>
          <h5>Start of Agriculture</h5>
          <p>Corrupti ut consequatur magni minus!
Iusto eos consectetur similique minus
culpa odio temporibus.</p>
        </div>
      </div>
      <div className='aboutBanner'>
        <h1>We’re popular leader in
        <br/>
        agriculture market globally</h1>
        <button className='aboutDiscoverBtn'>Discover More</button>
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
    </Routes>
  );
};

export default AboutUs;