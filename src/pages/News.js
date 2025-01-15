import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './style.css';

const News = () => {
  return (
    <>
    <Navbar />
    <nav>
        <div className="main-nav container flex">
        <Link className="logo" to="/"><i style={{ color: '#3874FF' }} className="fas fa-cubes-stacked"></i>Trade<i>X</i></Link>
            
            <div className="nav-links">
                <ul className="flex">
                    <li className="hover-link nav-item" id="ipl" onclick="onNavItemClick('ipl')">Indian Stocks</li>
                    <li className="hover-link nav-item" id="finance"  onclick="onNavItemClick('finance')">Internantional Market</li>
                    <li className="hover-link nav-item" id="politics"  onclick="onNavItemClick('politics')">Today's Hot</li>
                </ul>
            </div>
            <div className="search-bar flex">
                <input id="search-text" type="text" className="news-input" placeholder="Search for news"/>
                <button className="search-button">Search</button>
            </div>
        </div>
    </nav>
    <main>
        <div className="cards-container container flex " id="cards-container">
        </div>

    </main>

    <template id="template-news-card">

        <div className="card"> 
            <div className="card-header">
                <img src="https://via.placeholder.com/400x200" alt="News-Image" id="news-img"/>
            </div>
            <div className="card-content">
                <h3 id="news-title">This is the Title</h3>
                <h6 className="news-source" id="news-source">End Gadget 26/08/2023</h6>
                <p className="news-desc" id="news-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, reiciendis quis. Esse illo quae eaque nihil temporibus veritatis ea sunt.</p>
            </div>
        </div>
    </template>

    <Footer />
    </>
  )
}

export default News