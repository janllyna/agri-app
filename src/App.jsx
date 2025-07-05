import React from 'react';
import './style.css';

const App = () => {
  return (
    <div className='bg'>
      <div className='layout'>
        <div className='topBar'>
          <div className='logo'>
            <img src={require('./logo.jpg')} className='logoImg' alt='Logo' />
          </div>
          <div className='navBar'>
            <button className='navButton'>Home</button>
            <button className='navButton'>Pages</button>
            <button className='navButton'>Services</button>
            <button className='navButton'>Portfolio</button>
            <button className='navButton'>Blog</button>
            <button className='navButton'>Contact Us</button>
          </div>
          <div className='contact'>
            <button className='call'>Call us Now</button>
            <form className='search'>
              <label htmlFor="search">
                <input type='text' id='search' placeholder='🔍' />
              </label>
            </form>
            <button className='touch'>Get in Touch ↗️</button>
          </div>
        </div>

        <div className='mainContent'>
          <button className='smallTag'>Believe In Quality!</button>
          <h1 className='tagLine'>
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
          <p className='aboutPara'>There are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or randomised words
          which don't look even.
          <div className='aboutHighlight'>
          <h1 className='highlightNum'>*435+</h1>
          <p className='highlightText'>Growth Tons' of Harvest</p>
        </div>
          </p>
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
            <p className='serviceCardContent'>Farming and animal husbandry and discuss
            with farmers and scientists.</p>
          </div>
          <div className='services2'>
            <img src={require('./services2.jpg')} className='servicesImg' alt='Services' />
            <h4 className='serviceCardText'>Farming Products</h4>
            <p className='serviceCardContent'>Farming and animal husbandry and discuss
            with farmers and scientists.</p>
          </div>
          <div className='services3'>
            <img src={require('./services3.jpg')} className='servicesImg' alt='Services' />
            <h4 className='serviceCardText'>Soil Fertilization</h4>
            <p className='serviceCardContent'>Farming and animal husbandry and discuss
            with farmers and scientists.</p>
          </div>
        </div>
      </div>
      <div className='products'>
        <h1 className='products title'>Choose What's Perfect
        For Your Field</h1>
        <div className='productsContent'>
          <div className='productCardleft'>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
