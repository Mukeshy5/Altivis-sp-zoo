import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import Home from './components/Home.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Quote from './pages/Quote.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const addToCart = (product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.name === product.name)
      if (existingItem) {
        return items.map((item) => item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item)
      }
      return [...items, { ...product, quantity: 1 }]
    })
  }

  const changeQuantity = (productName, change) => {
    setCartItems((items) => items
      .map((item) => item.name === productName
        ? { ...item, quantity: item.quantity + change }
        : item)
      .filter((item) => item.quantity > 0))
  }

  const removeFromCart = (productName) => {
    setCartItems((items) => items.filter((item) => item.name !== productName))
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage onAddToCart={addToCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<Quote onCartOpen={() => setCartOpen(true)} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<section className="not-found section-pad"><p className="eyebrow">PAGE NOT FOUND</p><h1>Let's get you <em>back on track.</em></h1><Link className="button button-dark" to="/">Back to home <span aria-hidden="true">↗</span></Link></section>} />
        </Routes>
      </main>
      <Footer />
      <Cart
        items={cartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onChangeQuantity={changeQuantity}
        onRemove={removeFromCart}
      />
    </BrowserRouter>
  )
}

export default App