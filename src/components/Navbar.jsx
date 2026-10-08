import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = ({ cartCount, currency, currencies, onCurrencyChange, onCartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Altivis sp zoo. home">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-name">Altivis sp zoo.<small>FOOD SUPPLY</small></span>
        </Link>
        <div className="mobile-nav-actions">
          <button className="mobile-cart-trigger" type="button" onClick={() => { closeMenu(); onCartOpen() }} aria-label={`Open cart, ${cartCount} items`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
            <span className="cart-count">{cartCount}</span>
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          <NavLink to="/products" onClick={closeMenu}>Our products</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About us</NavLink>
          <label className="currency-picker">
            <span>Currency</span>
            <select value={currency} onChange={(event) => onCurrencyChange(event.target.value)} aria-label="Choose currency">
              {Object.values(currencies).map(({ code }) => <option key={code} value={code}>{code}</option>)}
            </select>
          </label>
          <button className="cart-trigger" type="button" onClick={() => { closeMenu(); onCartOpen() }} aria-label={`Open cart, ${cartCount} items`}>
            Cart <span className="cart-count">{cartCount}</span>
          </button>
          <NavLink className="nav-contact" to="/contact" onClick={closeMenu}>Get in touch <span aria-hidden="true">↗</span></NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar