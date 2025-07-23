import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainApp from './App';
import AboutUs from './AboutUs';
import History from './History';
import './style.css';
import Team from './Team';
import Jacob from './Jacob';
import Services from './Services';
import Portfolio from './Portfolio';
import Blog from './Blog';
import ContactUs from './ContactUs';

const Home2 = () => {
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
    <div className='Home2bg'>
      <div className='Home2layout'>
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
        <div className='Home2mainContent'>
          <button className='smallTag'>Beneficial For Health</button>
          <h1 className='tagLine'>
            Experience
            <br />
            The Power Of Nature
          </h1>
          <button className='contentContact'>Contact Us</button>
        </div>
      </div>
      <div className='caring'>
        <div className="infoStrip">
          <div>Any questions? Reach us at <u>966 355 965 57</u></div>
          <div>Agriculture Matters to the <b>Future of Development</b></div>
        </div>
        <div className='caringContent'>
          <div className='caringImgLeft'>
            <img src={require('./farmman1.jpg')} className='farmerCaringImg' alt='Farmer' />
          </div>
          <div className='caringImgRight'>
            <img src={require('./farmman2.jpg')} className='subfarmerCaringImg' alt='Farmer' />
            <h2>We're Committed to Caring</h2>
            <p>Greetings from Dosser Organic Farms. We distribute only organic herbs and produce directly to consumers.</p>
            <ul>
              <li> Gourmet Mushrooms</li>
              <li> Natural Healthy Products</li>
              <li> Lavender Farming</li>
              <li> Best Quality Standards</li>
              <li> Fertilizer Distribution</li>
              <li> Organic Fertilizer</li>
            </ul>
            <button className="knowMoreBtn">Know More</button>
          </div>
        </div>
      </div>
      <div className='home2featuresbg'>
        <h1>Best Agriculture Services</h1>
        <div className='Home2features'>
          <div className='featureCard2'>
            <img src={require('./feature1.jpg')} className='featureimg' alt='harvest' />
            <h4 className='featureHead'>Professional Farmers</h4>
          </div>
          <div className='featureCard2'>
            <img src={require('./feature2.jpg')} className='featureimg' alt='harvest' />
            <h4 className='featureHead'>Fresh Vegetables</h4>
          </div>
          <div className='featureCard2'>
            <img src={require('./feature3.jpg')} className='featureimg' alt='harvest' />
            <h4 className='featureHead'>Agricultural Products</h4>
          </div>
          <div className='featureCard2'>
            <img src={require('./feature4.jpg')} className='featureimg' alt='harvest' />
            <h4 className='featureHead'>100% Guaranteed</h4>
          </div>
        </div>
      </div>
      <div className="eco-section">
        <div className="green-banner">
          <div className="text-content">
            <button className="discoverBtn">Discover About Us</button>
            <h2>Agriculture matters to the<br />future of development</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>
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

        <div className="products-section">
          <div className="trustBtn">We Trust in Nature</div>
          <h2>Anyone Can Make Eco-Friendly Products From Scratch</h2>
          <div className="featuresGrid">
          <div className="featureCard">
            <div className="icon">🌾</div>
            <h3>Agriculture Products</h3>
            <p>
              There are many variations of passages of lorem ipsum available but the
              majority have suffered alteration.
            </p>
          </div>

          <div className="featureCard highlight">
            <div className="icon">👨‍🌾</div>
            <h3>Professional Farmers</h3>
            <p>
              There are many variations of passages of lorem ipsum available but the
              majority have suffered alteration.
            </p>
          </div>
          <div className="featureCard">
            <div className="icon">🥕</div>
            <h3>Fresh Vegetables</h3>
            <p>
              There are many variations of passages of lorem ipsum available but the
              majority have suffered alteration.
            </p>
          </div>

          <div className="featureCard">
            <div className="icon">🥛</div>
            <h3>Dairy Products</h3>
            <p>
              There are many variations of passages of lorem ipsum available but the
              majority have suffered alteration.
            </p>
          </div>

          <div className="featureCard">
            <div className="icon">✅</div>
            <h3>Quality Products</h3>
            <p>
              There are many variations of passages of lorem ipsum available but the
              majority have suffered alteration.
            </p>
          </div>

          <div className="featureCard">
            <div className="icon">⚙️</div>
            <h3>Modern Equipment</h3>
            <p>
              There are many variations of passages of lorem ipsum available but the
              majority have suffered alteration.
            </p>
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

export default Home2;