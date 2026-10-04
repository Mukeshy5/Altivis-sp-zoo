import { useState } from 'react'
import { Link } from 'react-router-dom'
import biscuits from '../assets/Biscuits.jpeg'
import cannedFoods from '../assets/Canned foods.jpeg'
import cereals from '../assets/Cereals.jpeg'
import chocolates from '../assets/Chocolates.jpeg'
import cookingIngredients from '../assets/Cooking ingredients.jpeg'
import dryFoods from '../assets/Dry foods.jpeg'
import energyDrinks from '../assets/Energy drinks.jpeg'
import flour from '../assets/Flour.avif'
import grains from '../assets/Grains.jpeg'
import juices from '../assets/Juices.jpeg'
import mineralWater from '../assets/Mineral water.jpeg'
import packagedMeals from '../assets/Packaged meals.jpeg'
import pasta from '../assets/Pasta.jpeg'
import rice from '../assets/rice.jpeg'
import salt from '../assets/Salt.jpg'
import sauces from '../assets/Sauces.jpeg'
import snacks from '../assets/Snacks.jpeg'
import softDrinks from '../assets/Soft drinks.jpeg'
import sugar from '../assets/Sugar.jpeg'

const products = [
  { name: 'Flour', group: 'Pantry', image: flour },
  { name: 'Rice', group: 'Pantry', image: rice },
  { name: 'Grains', group: 'Pantry', image: grains },
  { name: 'Pasta', group: 'Pantry', image: pasta },
  { name: 'Cereals', group: 'Pantry', image: cereals },
  { name: 'Cooking ingredients', group: 'Pantry', image: cookingIngredients },
  { name: 'Sugar', group: 'Pantry', image: sugar },
  { name: 'Salt', group: 'Pantry', image: salt },
  { name: 'Dry foods', group: 'Pantry', image: dryFoods },
  { name: 'Packaged meals', group: 'Pantry', image: packagedMeals },
  { name: 'Canned foods', group: 'Pantry', image: cannedFoods },
  { name: 'Sauces', group: 'Pantry', image: sauces },
  { name: 'Biscuits', group: 'Snacks', image: biscuits },
  { name: 'Chocolates', group: 'Snacks', image: chocolates },
  { name: 'Snacks', group: 'Snacks', image: snacks },
  { name: 'Juices', group: 'Drinks', image: juices },
  { name: 'Soft drinks', group: 'Drinks', image: softDrinks },
  { name: 'Energy drinks', group: 'Drinks', image: energyDrinks },
  { name: 'Mineral water', group: 'Drinks', image: mineralWater },
]

const filters = ['All products', 'Pantry', 'Snacks', 'Drinks']

const Products = ({ onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState('All products')
  const [announcement, setAnnouncement] = useState('')
  const visibleProducts = activeFilter === 'All products'
    ? products
    : products.filter((product) => product.group === activeFilter)

  const addProduct = (product) => {
    onAddToCart(product)
    setAnnouncement(`${product.name} added to cart.`)
  }

  return (
    <section className="products-section section-pad" id="products">
      <div className="section-heading">
        <div><p className="eyebrow">A RANGE FOR EVERYDAY</p><h2>Stock the <em>good stuff.</em></h2></div>
        <p className="section-intro">Explore a broad mix of food and drink categories, brought together in one straightforward range.</p>
      </div>
      <div className="product-toolbar">
        <div className="filter-list" role="group" aria-label="Filter products">
          {filters.map((filter) => (
            <button className={`filter-button${activeFilter === filter ? ' active' : ''}`} key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>
          ))}
        </div>
        <span className="product-count">{visibleProducts.length} CATEGORIES</span>
      </div>
      <p className="screen-reader-only" role="status" aria-live="polite">{announcement}</p>
      <div className="product-grid">
        {visibleProducts.map((product, index) => (
          <article className="product-card" key={product.name} style={{ '--card-order': index }}>
            <div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /></div>
            <div className="product-meta"><h3>{product.name}</h3><span>{product.group}</span></div>
            <button className="add-to-cart" type="button" onClick={() => addProduct(product)}><span aria-hidden="true">+</span> Add to cart</button>
          </article>
        ))}
      </div>
      <div className="catalogue-note"><span className="catalogue-star">✳</span><p>Looking for something specific?<br /><Link to="/contact">Tell us what you need <span aria-hidden="true">→</span></Link></p></div>
    </section>
  )
}

export default Products