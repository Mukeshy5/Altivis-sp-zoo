import Products from '../common/Products.jsx'

const ProductsPage = ({ currency, onAddToCart }) => (
  <>
    <section className="page-intro section-pad">
      <p className="eyebrow">THE ALTIVIS RANGE</p>
      <h1>Everyday food,<br /><em>all in one place.</em></h1>
      <p>Explore pantry staples, snacks and drinks. Add the products you are interested in to your cart to prepare an enquiry.</p>
    </section>
    <Products currency={currency} onAddToCart={onAddToCart} />
  </>
)

export default ProductsPage