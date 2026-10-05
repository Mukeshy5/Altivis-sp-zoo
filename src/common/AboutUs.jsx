import { Link } from 'react-router-dom'
import riceImage from '../assets/Grains.jpeg'
import cannedImage from '../assets/Canned foods.jpeg'
import snacksImage from '../assets/Snacks.jpeg'

const AboutUs = () => {
  return (
    <section className="about-section section-pad" id="about">
      <div className="about-images" aria-label="A selection of food categories">
        <img className="about-image-main" src={riceImage} alt="Rice from the Altivis product range" loading="lazy" />
        <img className="about-image-small" src={cannedImage} alt="Canned foods from the Altivis product range" loading="lazy" />
        <div className="about-image-label"><span>GOOD FOOD,</span><strong>EVERY DAY.</strong></div>
        <img className="about-image-strip" src={snacksImage} alt="Snacks from the Altivis product range" loading="lazy" />
      </div>
      <div className="about-copy">
        <p className="eyebrow">A LITTLE ABOUT US</p>
        <h2>Food essentials.<br /><em>Thoughtfully brought together.</em></h2>
        <p className="about-body">Altivis sp zoo. brings together a varied selection of everyday food and drink categories, making it easier to explore the staples and favourites your business is looking for.</p>
        <p className="about-body">From grains and pantry basics to snacks and refreshments, our range is built around the things people reach for every day.</p>
        <Link className="text-link" to="/products">See what's in the range <span aria-hidden="true">→</span></Link>
        <div className="about-signoff"><span>ALTIVIS SP ZOO.</span><span>FOOD SUPPLY</span></div>
      </div>
    </section>
  )
}

export default AboutUs