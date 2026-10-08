import { formatCurrency } from '../common/currency.js'

const Cart = ({ items, isOpen, onClose, onChangeQuantity, onRemove, currency }) => {
  if (!isOpen) return null

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  const prepareEmail = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const itemLines = items.map((item) => `- ${item.name} x ${item.quantity}`).join('\n')
    const body = [
      `Name: ${formData.get('name')}`,
      `Company: ${formData.get('company') || 'Not provided'}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      '',
      'Products requested:',
      itemLines,
      '',
      `Additional details: ${formData.get('message') || 'None'}`,
    ].join('\n')

    window.location.href = `mailto:?subject=${encodeURIComponent('Altivis sp zoo. product enquiry')}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="cart-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="cart-panel" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="cart-heading">
          <div><p className="eyebrow">YOUR SELECTION · {itemCount} ITEMS</p><h2 id="cart-title">Your cart</h2></div>
          <button className="cart-close" type="button" onClick={onClose} aria-label="Close cart">×</button>
        </div>
        {items.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-mark" aria-hidden="true">＋</span>
            <h3>Your cart is empty</h3>
            <p>Add products to start an enquiry.</p>
            <button className="button button-dark" type="button" onClick={onClose}>Browse products <span aria-hidden="true">↗</span></button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.name}>
                  <img src={item.image} alt="" />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <span>{item.group}</span>
                    <div className="quantity-control" aria-label={`${item.name} quantity`}>
                      <button type="button" onClick={() => onChangeQuantity(item.name, -1)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                      <output>{item.quantity}</output>
                      <button type="button" onClick={() => onChangeQuantity(item.name, 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <strong>{formatCurrency(item.price * item.quantity, currency)}</strong>
                    <button className="remove-item" type="button" onClick={() => onRemove(item.name)}>Remove</button>
                  </div>
                </article>
              ))}
            </div>
            <form className="cart-checkout" onSubmit={prepareEmail}>
              <div className="cart-checkout-heading"><span>CONTACT DETAILS</span><span>ENQUIRY</span></div>
              <label htmlFor="cart-name">Your name</label>
              <input id="cart-name" name="name" autoComplete="name" placeholder="Name" required />
              <div className="form-row">
                <div><label htmlFor="cart-company">Company <span>(optional)</span></label><input id="cart-company" name="company" autoComplete="organization" placeholder="Business name" /></div>
                <div><label htmlFor="cart-email">Email address</label><input id="cart-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></div>
              </div>
              <label htmlFor="cart-phone">Phone <span>(optional)</span></label>
              <input id="cart-phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone number" />
              <label htmlFor="cart-message">Additional details <span>(optional)</span></label>
              <textarea id="cart-message" name="message" rows="2" placeholder="Anything else we should know?" />
              <button className="button button-lime cart-checkout-submit" type="submit">Prepare product enquiry <span aria-hidden="true">↗</span></button>
              <p className="cart-email-note">Your email app will open with your contact details and selected products.</p>
            </form>
          </>
        )}
      </section>
    </div>
  )
}

export default Cart