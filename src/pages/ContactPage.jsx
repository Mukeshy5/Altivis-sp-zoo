import { Link } from 'react-router-dom'
import ContactUs from '../common/ContectUs.jsx'

const ContactPage = () => (
  <>
    <section className="page-intro section-pad contact-page-intro">
      <p className="eyebrow">CONTACT ALTIVIS SP ZOO.</p>
      <h1>Let's talk<br /><em>about food.</em></h1>
      <p>Have a question about a category or a product? Send an enquiry and include the details that will help us understand what you need.</p>
    </section>
    <ContactUs />
    <section className="contact-next section-pad"><span>READY TO GET SPECIFIC?</span><p>Add products to your cart and include them in a product enquiry.</p><Link className="text-link" to="/products">Browse products <span aria-hidden="true">→</span></Link></section>
  </>
)

export default ContactPage