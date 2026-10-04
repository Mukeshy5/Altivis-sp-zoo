import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = ({ cartCount, onCartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Altivis sp zoo. home">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-name">Altivis sp zoo.<small>FOOD SUPPLY</small></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <div id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          <NavLink to="/products" onClick={closeMenu}>Our products</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About us</NavLink>
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