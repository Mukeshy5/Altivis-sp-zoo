import { Link } from 'react-router-dom'

const Quote = ({ onCartOpen }) => {
  return (
    <section className="quote-page section-pad">
      <p className="eyebrow">PRODUCT ENQUIRY</p>
      <h1>Build your<br /><em>product request.</em></h1>
      <p>Choose items from the Altivis range, add them to your cart, then share your contact details so your enquiry is ready to send by email.</p>
      <div className="quote-steps"><div><span>01</span><strong>Browse the range</strong><p>Explore pantry essentials, snacks and drinks.</p></div><div><span>02</span><strong>Add products</strong><p>Adjust quantities or remove items in your cart.</p></div><div><span>03</span><strong>Prepare an enquiry</strong><p>Your email draft includes the products and your contact details.</p></div></div>
      <div className="hero-actions"><Link className="button button-dark" to="/products">Browse products <span aria-hidden="true">↗</span></Link><button className="button button-lime" type="button" onClick={onCartOpen}>Open your cart <span aria-hidden="true">→</span></button></div>
    </section>
  )
}

export default Quote