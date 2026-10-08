import { Link } from 'react-router-dom'
import { formatCurrency } from '../common/currency.js'

const plans = [
  {
    name: 'Starter',
    label: 'For smaller orders',
    description: 'A simple way to stock up on everyday essentials for a small team or business.',
    price: 150,
    features: ['Mixed pantry staples', 'Snacks and drinks', 'Flexible product selection'],
  },
  {
    name: 'Business',
    label: 'Most requested',
    description: 'A dependable range for regular food and drink orders with more room to tailor the selection.',
    price: 350,
    features: ['Larger mixed orders', 'Priority product matching', 'Regular enquiry support'],
    featured: true,
  },
  {
    name: 'Wholesale',
    label: 'For larger supply needs',
    description: 'A tailored approach for larger volumes, recurring requirements and broader product lists.',
    price: null,
    features: ['Volume-based pricing', 'Custom product lists', 'Recurring supply enquiries'],
  },
]

const PricingPage = ({ currency }) => (
  <>
    <section className="page-intro pricing-intro section-pad">
      <p className="eyebrow">SIMPLE, FLEXIBLE PRICING</p>
      <h1>Good food supply,<br /><em>clearer choices.</em></h1>
      <p>Choose a starting point for your order, then send us your product list. We will confirm availability and the final price for your enquiry.</p>
    </section>

    <section className="pricing-section section-pad" aria-labelledby="pricing-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FIND YOUR FIT</p>
          <h2 id="pricing-heading">A range for<br /><em>every order.</em></h2>
        </div>
        <p className="section-intro">Prices are starting points and may vary by product, quantity and delivery requirements. No subscription or commitment is required.</p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className={`pricing-card${plan.featured ? ' pricing-card-featured' : ''}`} key={plan.name}>
            {plan.featured && <span className="pricing-badge">POPULAR</span>}
            <p className="pricing-label">{plan.label}</p>
            <h3>{plan.name}</h3>
            <p className="pricing-description">{plan.description}</p>
            <strong className="pricing-price">{plan.price ? `From ${formatCurrency(plan.price, currency)}` : 'Let’s talk'}</strong>
            <ul>
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <Link className={plan.featured ? 'button button-dark' : 'button button-outline'} to="/contact">
              Enquire now <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </div>
    </section>

    <section className="pricing-note section-pad">
      <div>
        <p className="eyebrow">NEED SOMETHING SPECIFIC?</p>
        <h2>Tell us what<br /><em>you need.</em></h2>
      </div>
      <div>
        <p>Share the categories, quantities or delivery details you already know. We will help shape the right order instead of fitting you into a fixed package.</p>
        <Link className="text-link" to="/contact">Start an enquiry <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  </>
)

export default PricingPage
