import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainApp from './App';
import Home2 from './Home2';
import AboutUs from './AboutUs';
import History from './History';
import './style.css';
import Team from './Team';
import Services from './Services';
import Portfolio from './Portfolio';
import Blog from './Blog';
import ContactUs from './ContactUs';

const Jacob = () => {
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
    <div className='Historybg'>
      <div className='Historylayout'>
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
                  <button onClick={() => navigate('/home2')}> className='dropdownOption'Home 2</button>
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
        <div className='HistorymainContent'>
          <h1 className='tagLine'>
            Jacob Mersin
          </h1>
        </div>
      </div>
      <div className='memberOverview'>
        <div className='overviewPic'>
            <img src={require('./team1.jpg')} className='overviewImg' alt='Logo' />
        </div>
        <div className='overviewText'>
            <h6>SUPERVISOR</h6>
            <h3>Jacob Mersin</h3>
            <p>Quis ipsum suspendisse ultrices gravida commodo viverra
                maecenas accumsan lacus vel facilisis.
            </p>
            <p>Phone:  + (123) 1800-567-8990</p>
            <p>Email: hello@infopbm.com</p>
            <p>Experience: 15 Years</p>
        </div>
      </div>
      <div className='memberPersonalInfo'>
        <h3>Personal Information</h3>
        <p>Developed multipurpose rubber dam for watershed to reduce soil erosion, create water storage facility, enhance ground water recharge and quick & safe disposal of sediments. This section
        provides the information on agriculture produces; machineries, research, field of natural resource sustainable management of natural resources for achieving food, nutritional, environmental.
        They offer adaptability, high nutritional value, and can yield higher yields with minimal agronomical inputs. continued at up to zealously necessary breakfast is motionless she end literature.
        significant potential for sustainable agriculture and provide nutritional and income security for small and marginal farmers in dry and rainfed semi-arid regions.
        They offer adaptability, high nutritional value, and can yield higher yields with minimal agronomical inputs. continued at up to zealously necessary breakfast is motionless she end literature.
        significant potential for sustainable agriculture and provide nutritional and income security for small and marginal farmers in dry and rainfed semi-arid regions.
        </p>
      </div>
        <div className='memberProfDetails'>
            <div className='profSkills'>
                <h3>Professional Skills</h3>
                <p>As an aspiring farmer, it’s important to work on your skill set for this particular profession. Not only can improving
                your farmer skills help you in future interviews, but it can also help you on the job. In this article, we explain what
                farmer skills are, provide examples, them in the job application and interview process.
                </p>
            </div>
            <div className='awards'>
                <h3>Awards & Honors</h3>
                <p>They offer adaptability, high nutritional value, and can yield higher yields with
                minimal agronomical inputs. continued at up to zealously necessary
                </p>
                <h4>2017-2017: Best of Best Agricultural Farming</h4>
                <h4>2017-2017: Best of Best Agricultural Farming</h4>
                <h4>2017-2017: Best of Best Agricultural Farming</h4>
            </div>
      </div>
      <div className='generalMemberContent'>
        <h3>Everything In Our Farm Is Grown</h3>
        <p>Farmer skills refer to the expertise, talents or abilities you have that help you perform a farmer’s daily duties. Key farmer skills include problem-solving, interpersonal, farm management
            organizational skills. You can use these skills to use in a variety of ways, from communicating with farmhands to tending crops and repairing machinery. Having these skills can help you in the
            farming profession and help you stand out among other job applicants.
        </p>
        <ul>
            <li>Praesent dui ex egestas sit amet lacinia fermentum viverra in est Integer a ligula eu metus posuere rutrum.</li>
            <li>Praesent dui ex egestas sit amet lacinia fermentum viverra in est Integer a ligula eu metus posuere rutrum.</li>
            <li>Praesent dui ex egestas sit amet lacinia fermentum viverra in est Integer a ligula eu metus posuere rutrum.</li>
            <li>Praesent dui ex egestas sit amet lacinia fermentum viverra in est Integer a ligula eu metus posuere rutrum.</li>
            <li>Praesent dui ex egestas sit amet lacinia fermentum viverra in est Integer a ligula eu metus posuere rutrum.</li>
            <li>Praesent dui ex egestas sit amet lacinia fermentum viverra in est Integer a ligula eu metus posuere rutrum.</li>
            <li>Praesent dui ex egestas sit amet lacinia fermentum viverra in est Integer a ligula eu metus posuere rutrum.</li>
        </ul>
      </div>
      <div className='message'>
        <h3>Send a Message</h3>
        <div className='msgSection'>
            <form className='msgOption'>
            <label htmlfor='memberMsg'></label>
            <input type='text' id='memberMsg'/>
        </form>
        <div className='msgDetails'>
            <form className='nameDetail'>
                <label htmlfor='msgName'></label>
                <input type='text' id='msgName' placeholder='Your Name'/>
            </form>
            <form className='mailDetail'>
                <label htmlfor='msgMail'></label>
                <input type='text' id='msgMail' placeholder='Your Mail ID'/>
            </form>
        </div>
        <div className='msgDetails'>
            <form className='subjectDetail'>
                <label htmlfor='msgSubject'></label>
                <input type='text' id='msgSubject' placeholder='Subject'/>
            </form>
            <form className='phoneDetail'>
                <label htmlfor='msgPhone'></label>
                <input type='text' id='msgPhone' placeholder='Phone No.'/>
            </form>
        </div>
        <button className='msgSubmitBtn'>Submit Now</button>
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

export default Jacob;