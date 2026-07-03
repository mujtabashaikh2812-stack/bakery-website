import { useState, useEffect } from 'react';
import { FaSearch, FaStar, FaTag, FaFilter, FaArrowRight } from 'react-icons/fa';
import './Products.css';

const allProducts = [
  // Cakes
  { id: 1, name: 'Classic Chocolate Cake', category: 'Cakes', price: 45, rating: 4.8, image: '🍰', stock: 10 },
  { id: 2, name: 'Red Velvet Delight', category: 'Cakes', price: 50, rating: 4.9, image: '🎂', stock: 8 },
  { id: 3, name: 'Lemon Drizzle Cake', category: 'Cakes', price: 40, rating: 4.7, image: '🍰', stock: 12 },
  { id: 4, name: 'Carrot Cake', category: 'Cakes', price: 48, rating: 4.8, image: '🎂', stock: 7 },
  // Cupcakes
  { id: 5, name: 'Vanilla Bean Cupcakes', category: 'Cupcakes', price: 24, rating: 4.6, image: '🧁', stock: 20 },
  { id: 6, name: 'Chocolate Fudge Cupcakes', category: 'Cupcakes', price: 26, rating: 4.9, image: '🧁', stock: 15 },
  { id: 7, name: 'Strawberry Swirl Cupcakes', category: 'Cupcakes', price: 28, rating: 4.7, image: '🧁', stock: 18 },
  // Pastries
  { id: 8, name: 'Butter Croissants', category: 'Pastries', price: 18, rating: 4.9, image: '🥐', stock: 30 },
  { id: 9, name: 'Almond Croissants', category: 'Pastries', price: 22, rating: 4.8, image: '🥐', stock: 25 },
  { id: 10, name: 'Pain au Chocolat', category: 'Pastries', price: 20, rating: 4.7, image: '🥐', stock: 28 },
  // Cookies
  { id: 11, name: 'Chocolate Chip Cookies', category: 'Cookies', price: 15, rating: 4.9, image: '🍪', stock: 50 },
  { id: 12, name: 'Oatmeal Raisin Cookies', category: 'Cookies', price: 14, rating: 4.6, image: '🍪', stock: 40 },
  // Breads
  { id: 13, name: 'Sourdough Bread', category: 'Breads', price: 12, rating: 4.8, image: '🍞', stock: 15 },
  { id: 14, name: 'Baguette', category: 'Breads', price: 8, rating: 4.7, image: '🥖', stock: 20 },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(60);
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    let result = products;

    // Search filter
    if (searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Category filter
    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }

    // Price filter
    result = result.filter(p => p.price <= priceRange);

    setFilteredProducts(result);
    setVisibleProducts(8); // Reset visible products on filter change
  }, [searchTerm, category, priceRange, products]);
  
  const loadMore = () => {
    setVisibleProducts(prev => prev + 4);
  };

  const categories = ['All', 'Cakes', 'Cupcakes', 'Pastries', 'Cookies', 'Breads'];

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <h1>Our Delicious Products</h1>
          <p>Handcrafted with love, baked fresh daily just for you.</p>
        </div>
      </div>

      <div className="container">
        <div className="filter-controls">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
          
          <div className="filters">
            <div className="filter-group">
              <label><FaTag /> Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label><FaFilter /> Price Range: ${priceRange}</label>
              <input 
                type="range" 
                min="10" 
                max="60"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.slice(0, visibleProducts).map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <span className="product-emoji">{product.image}</span>
                <span className="product-category-tag">{product.category}</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-details">
                  <div className="product-price">${product.price.toFixed(2)}</div>
                  <div className="product-rating">
                    <FaStar className="star-icon" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <button className="btn btn-primary btn-small">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>No products found!</h3>
            <p>Try adjusting your search or filters.</p>
          </div>
        )}

        {visibleProducts < filteredProducts.length && (
          <div className="load-more">
            <button onClick={loadMore} className="btn btn-primary">
              Load More <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products; 