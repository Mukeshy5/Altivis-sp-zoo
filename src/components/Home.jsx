import { Link } from 'react-router-dom'
import AboutUs from '../common/AboutUs.jsx'
import flourImage from '../assets/Flour.avif'
import riceImage from '../assets/rice.jpeg'
import snacksImage from '../assets/Snacks.jpeg'
import juicesImage from '../assets/Juices.jpeg'

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> ALTIVIS SP ZOO. · FOOD SUPPLY</p>
          <h1>Good food.<br /><em>Good business.</em></h1>
          <p className="hero-description">Everyday food essentials, brought together for businesses that care about what goes on the shelf and on the table.</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/products">Explore our range <span aria-hidden="true">↘</span></Link>
            <Link className="text-link" to="/about">Get to know us <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-note"><span className="note-line" /> Pantry staples, snacks and drinks</div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src={flourImage} alt="Flour from the Altivis sp zoo. food range" /></div>
          <div className="hero-stamp" aria-label="Altivis sp zoo., food supply"><span>GOOD THINGS</span><strong>GROW<br />HERE</strong><span>ALTIVIS SP ZOO. · FOOD SUPPLY</span></div>
          <span className="hero-index">01 / PANTRY ESSENTIALS</span>
        </div>
        <div className="hero-bottom"><span>ALTIVIS SP ZOO.</span><span>FOOD THAT FITS YOUR BUSINESS</span><a href="#home-range">SCROLL TO EXPLORE ↓</a></div>
      </section>
      <div className="ticker" aria-label="Product categories">
        <div className="ticker-track"><span>GRAINS</span><i>✳</i><span>DRY GOODS</span><i>✳</i><span>DRINKS</span><i>✳</i><span>SNACKS</span><i>✳</i><span>EVERYDAY ESSENTIALS</span><i>✳</i><span>GRAINS</span><i>✳</i><span>DRY GOODS</span><i>✳</i><span>DRINKS</span><i>✳</i><span>SNACKS</span><i>✳</i></div>
      </div>
      <section className="home-range-section section-pad" id="home-range">
        <div className="section-heading">
          <div><p className="eyebrow">A RANGE FOR EVERYDAY</p><h2>Good things for<br /><em>every kind of table.</em></h2></div>
          <p className="section-intro">From the foundations of a well-stocked pantry to something refreshing or a little treat, explore a range made for daily food needs.</p>
        </div>
        <div className="home-category-grid">
          <Link className="home-category-card category-wide" to="/products">
            <img src={riceImage} alt="Rice and grains from the Altivis range" loading="lazy" />
            <div><span>01 / PANTRY</span><h3>Everyday foundations</h3><p>Rice, grains, flour, pasta and the essentials that bring a meal together.</p><span className="category-link">Explore pantry <b aria-hidden="true">↗</b></span></div>
          </Link>
          <Link className="home-category-card" to="/products">
            <img src={snacksImage} alt="Snacks from the Altivis range" loading="lazy" />
            <div><span>02 / SNACKS</span><h3>A little something</h3><p>Biscuits, chocolates and snacks for the in-between moments.</p><span className="category-link">Explore snacks <b aria-hidden="true">↗</b></span></div>
          </Link>
          <Link className="home-category-card" to="/products">
            <img src={juicesImage} alt="Juices from the Altivis range" loading="lazy" />
            <div><span>03 / DRINKS</span><h3>Something to sip</h3><p>Juices, soft drinks, energy drinks and mineral water.</p><span className="category-link">Explore drinks <b aria-hidden="true">↗</b></span></div>
          </Link>
        </div>
        <div className="home-range-link"><span>19 FOOD & DRINK CATEGORIES</span><Link className="text-link" to="/products">Browse the complete range <span aria-hidden="true">→</span></Link></div>
      </section>
      <AboutUs />
      <section className="home-selection section-pad">
        <div className="selection-copy"><p className="eyebrow">BUILT AROUND THE EVERYDAY</p><h2>One considered range.<br /><em>Many ways to use it.</em></h2><p>Altivis sp zoo. brings together familiar food categories in one place. Browse by pantry, snacks or drinks, then add the items you want to discuss to your cart.</p><Link className="button button-dark" to="/products">See all products <span aria-hidden="true">↗</span></Link></div>
        <div className="selection-list"><Link to="/products"><span>01</span><strong>Pantry essentials</strong><small>12 categories</small><b aria-hidden="true">↗</b></Link><Link to="/products"><span>02</span><strong>Snacks & treats</strong><small>3 categories</small><b aria-hidden="true">↗</b></Link><Link to="/products"><span>03</span><strong>Drinks & refreshment</strong><small>4 categories</small><b aria-hidden="true">↗</b></Link></div>
      </section>
      <section className="home-cta section-pad">
        <p className="eyebrow"><span className="eyebrow-dot" /> LET'S TALK FOOD</p>
        <h2>Looking for something<br /><em>for your business?</em></h2>
        <p>Explore the range, add products to your cart, and send us an enquiry with your contact details.</p>
        <div className="hero-actions"><Link className="button button-lime" to="/products">Explore products <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/contact">Contact Altivis sp zoo. <span aria-hidden="true">→</span></Link></div>
      </section>
    </>
  )
}

export default Home