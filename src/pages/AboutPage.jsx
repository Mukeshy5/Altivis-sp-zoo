import { Link } from 'react-router-dom'
import AboutUs from '../common/AboutUs.jsx'

const AboutPage = () => (
  <>
    <section className="page-intro section-pad">
      <p className="eyebrow">ABOUT ALTIVIS SP ZOO.</p>
      <h1>Food essentials.<br /><em>Thoughtfully brought together.</em></h1>
      <p>A practical food and drink range for the everyday needs of businesses and the people they serve.</p>
    </section>
    <AboutUs />
    <section className="about-detail section-pad">
      <div><p className="eyebrow">WHAT WE BRING TOGETHER</p><h2>Familiar categories.<br /><em>Room to explore.</em></h2></div>
      <div className="about-detail-copy"><p>Our range spans pantry staples, grains, snacks, drinks and more. Each category is part of a wider selection designed to make discovering everyday food products straightforward.</p><p>Whether you already know what you need or are browsing for ideas, start with the complete product range and build an enquiry around the items that interest you.</p><Link className="text-link" to="/products">Browse the product range <span aria-hidden="true">→</span></Link></div>
    </section>
  </>
)

export default AboutPage