import { useState } from 'react'

const ContectUs = () => {
  const [submitted, setSubmitted] = useState(false)

  const prepareEmail = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const body = [
      `Name: ${formData.get('name')}`,
      `Company: ${formData.get('company') || 'Not provided'}`,
      `Email: ${formData.get('email')}`,
      '',
      'What I am looking for:',
      formData.get('message'),
    ].join('\n')
    window.location.href = `mailto:?subject=${encodeURIComponent('Altivis sp zoo. product enquiry')}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-intro">
        <p className="eyebrow"><span className="eyebrow-dot" /> LET'S TALK FOOD</p>
        <h2>Have a product<br />in <em>mind?</em></h2>
        <p>Tell us what your business is looking for and prepare an enquiry to send from your email app.</p>
        <div className="contact-aside"><span className="aside-number">01</span><span>PRODUCT ENQUIRIES<br />AND RANGE QUESTIONS</span></div>
      </div>
      <form className="contact-form" onSubmit={prepareEmail}>
        <div className="form-topline"><span>YOUR ENQUIRY</span><span>01 — 04</span></div>
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="name" autoComplete="name" placeholder="Name" required />
        <div className="form-row">
          <div><label htmlFor="contact-company">Company <span>(optional)</span></label><input id="contact-company" name="company" autoComplete="organization" placeholder="Business name" /></div>
          <div><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></div>
        </div>
        <label htmlFor="contact-message">What are you looking for?</label>
        <textarea id="contact-message" name="message" rows="3" placeholder="Product, category, or a question..." required />
        <div className="form-submit-row"><button className="button button-lime" type="submit">{submitted ? 'Prepare another email' : 'Prepare enquiry email'} <span aria-hidden="true">↗</span></button><span>Your email app will open with your details.</span></div>
      </form>
    </section>
  )
}

export default ContectUs