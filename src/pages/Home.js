import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TradingViewWidget from '../components/TradingViewWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

const Home = () => {
  return (
    <div>
        <>
        <Navbar />


{/* <!-- Hero Section --> */}
<section className="hero data-scroll">
  <div className="container">
    <div className="row align-items-center">
      {/* <!-- Left Column: Content --> */}
      <div className="col-md-6">
        <div className="hero-content text-start">
          <h1>Buy & Sell Digital</h1>
          <h1>Assets In The</h1>
          <h1>TradeX</h1>
          <p>Your Gateway to Smarter Investments</p>
          <a href="#" className="btn btn-custom btn-lg no-radius">Start Trading</a>
        </div>
      </div>
      
      {/* <!-- Right Column: Image --> */}
      <div className="col-md-6">
        <img src="/img/lol1.png" alt="Stock Market Analysis" className="img-fluid" />
        {/* <!-- <i style="font-size: 350px;" className="fa-solid fa-circle-up"></i> --> */}
      </div>
    </div>
  </div>

  <svg viewBox="0 0 1200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="wave">
      <path d="M0,0 C600,100 1200,100 1200,0 L1200,100 L0,100 Z" fill="#0E0F23"></path>
  </svg>
</section>


{/* <!-- Features Section --> */}

<section className="features py-5 data-scroll">
  <div className="container text-center mt-5">
    <h2>Find Your Next Investment on TradeX</h2>
    <hr className="underline mx-auto" />
    <div className="row mt-4">
        <div className="col-md-3">
            <div className="card p-4 custom-hover-card">
                <div className="icon rounded-circle bg-light-green mx-auto">
                  <i className="fa-solid fa-arrow-trend-up option-icon"></i>
                </div>
                <h4 className="mt-3">Stocks</h4>
                <p>Invest effortlessly in 2200+ stocks.</p>
            </div>
        </div>
        <div className="col-md-3">
          <div className="card p-4 custom-hover-card2">
              <div className="icon rounded-circle bg-light-purple mx-auto">
                  <i className="fa-solid fa-chart-simple option-icon"></i>
              </div>
              <h4 className="mt-3">F&O</h4>
              <p>Make the most of the market volatility.</p>
          </div>
      </div>        
        <div className="col-md-3">
            <div className="card p-4 custom-hover-card3">
                <div className="icon rounded-circle bg-light-blue mx-auto">
                  <i className="fa-solid fa-indian-rupee-sign option-icon"></i>
                </div>
                <h4 className="mt-3">Mutual Funds</h4>
                <p>Choose professionally managed funds.</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-4 custom-hover-card4">
                <div className="icon rounded-circle bg-light-pink mx-auto">
                  <i className="fa-solid fa-bullhorn option-icon"></i>
                </div>
                <h4 className="mt-3">IPOs</h4>
                <p>Seize opportunities and invest in new ventures.</p>
            </div>
        </div>
    </div>
</div>

</section>

<section className="features py-5 data-scroll">
  <div className="container">
    <div className="row">
      {/* <!-- TradingView Widget Column --> */}
      <div className="col-lg-5 col-md-12 col-12 mb-4 order-lg-1 order-2">
      <TradingViewWidget />
      </div>
      {/* <!-- Trending Today Column --> */}
      <div className="col-lg-7 col-md-12 col-12 order-lg-2 order-1">
        <div className="trending-section">
          <h4>What's Trending Today</h4>
          <div className="divider"></div>
          <p>
            Whether you're tracking top gainers, losers, or stocks soaring past their 52-week highs, we've got you covered. Make smarter investment decisions with ease on TradeX.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="features py-5 data-scroll">
  <div className="container py-5">
    <div className="row align-items-center">
      {/* <!-- Text Content Column --> */}
      <div className="col-lg-6 col-md-12 marginreq mb-4">
        <h2 className="section-title">Track Market Live</h2>
        <div className="divider"></div>
        <p className="lead">
          Stay ahead of the market trends with real-time insights. With live updates and comprehensive data at your fingertips, you'll always be in the know.
        </p>
      </div>
      
      {/* <!-- Market Cards Column --> */}
      <div className="col-lg-6 col-md-12">
        <div className="row">
          {/* <!-- First Market Card --> */}
          <div className="col-sm-6 col-md-4 mb-3">
            <div className="card market-card p-4">
              <h5>Nifty 50</h5>
              <div className="price">25151.95</div>
              <div className="change">+99.6</div>
              <div className="percentage">&#9650; 0.4%</div>
            </div>
          </div>
          
          {/* <!-- Second Market Card --> */}
          <div className="col-sm-6 col-md-4 mb-3">
            <div className="card market-card p-4">
              <h5>Nifty Bank</h5>
              <div className="price">51152.75</div>
              <div className="change">+8.9</div>
              <div className="percentage">&#9650; 0.02%</div>
            </div>
          </div>
          
          {/* <!-- Third Market Card --> */}
          <div className="col-sm-6 col-md-4 mb-3">
            <div className="card market-card p-4">
              <h5>Nifty IT</h5>
              <div className="price">42591.65</div>
              <div className="change">+197.25</div>
              <div className="percentage">&#9650; 0.47%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="features py-5 data-scroll">
  <div className="container py-5">
    <div className="row align-items-center">
      {/* <!-- Image Column --> */}
      <div className="col-lg-6 col-md-12 marginreq text-center text-lg-left mb-4 mb-lg-0">
        <img src="/img/main3.png" style={{ width: '80%' }} alt="Collaboration Illustration" className="img-fluid illustration" />
      </div>
      
      {/* <!-- Text Content Column --> */}
      <div className="col-lg-6 col-md-12 marginreq">
        <h2 className="section-title">Start Trading in Minutes</h2>
        <div className="divider"></div>
        <p className="lead">
          Ready to take control of your financial future? Join Trade X today and unlock access to a world of trading opportunities. Create your account now and start trading with confidence on the platform designed for success!
        </p>
        <a href="#" className="btn btn-custom btn-lg no-radius">Get Started</a>
      </div>
    </div>
  </div>
</section>

  <Footer />
        </>
    </div>
  )
}

export default Home