import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
      <Link className="brand footer-brand" to="/" aria-label="Altivis sp zoo. home"><span className="brand-mark" aria-hidden="true">A</span><span className="brand-name">Altivis sp zoo.<small>FOOD SUPPLY</small></span></Link>
      <span className="footer-note">Everyday food, thoughtfully brought together.</span>
      <div className="footer-links"><Link to="/products">Products</Link><Link to="/about">About</Link><Link to="/contact">Enquiries</Link><Link to="/privacy">Privacy</Link></div>
      <span className="copyright">© ALTIVIS SP ZOO.</span>
    </footer>
  )
}

export default Footer